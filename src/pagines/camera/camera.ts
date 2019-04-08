import {Component} from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AndroidPermissions } from '@ionic-native/android-permissions';

/**
 * Component que mostra el funcionament de la Camera
 * ionic cordova plugin add cordova-plugin-camera
 * npm install --save @ionic-native/camera
 * ionic cordova plugin add cordova-plugin-android-permissions
 * npm install --save @ionic-native/android-permissions
 * @author sergi.grau@fje.edu
 * @version 1.0 30.04.2018
 */

@Component({
  selector: 'camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  base64Image:any;

  constructor(private camera: Camera, private androidPermissions: AndroidPermissions) {

    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      result => console.log('Té premís?',result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    );

    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
  }
   retallar:any =   prompt("Quantes caselles vols: 3x3 o 4x4?" );
  PUZZLE_DIFFICULTY : any = this.retallar;
 PUZZLE_HOVER_TINT : any= '#009900';
  _stage;
   _canvas;

   _img;
   _pieces;
   _puzzleWidth;
   _puzzleHeight;
   _pieceWidth;
  _pieceHeight;
   _currentPiece;
  _currentDropPiece;

   _mouse;
  ferFoto(){
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 100,
      targetWidth: screen.width -50,
      targetHeight: 350,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
       this.base64Image = 'data:image/jpeg;base64,' + imageData;
       init(this.base64Image);
    }, (err) => {
      // Handle error
    });
  }




}
var retallar =   3;
const PUZZLE_DIFFICULTY = retallar;
const PUZZLE_HOVER_TINT = '#009900';

var _stage;
var _canvas;

var _img;
var _pieces;
var _puzzleWidth;
var _puzzleHeight;
var _pieceWidth;
var _pieceHeight;
var _currentPiece;
var _currentDropPiece;

var _mouse;

function init(imatge) {

  _img = new Image();
  _img.addEventListener('load', onImage, false);
  _img.src = imatge;
}


function onImage(e) {
  _pieceWidth = Math.floor(_img.width / PUZZLE_DIFFICULTY)
  _pieceHeight = Math.floor(_img.height / PUZZLE_DIFFICULTY)
  _puzzleWidth = _pieceWidth * PUZZLE_DIFFICULTY;
  _puzzleHeight = _pieceHeight * PUZZLE_DIFFICULTY;
  setCanvas();
  initPuzzle();
}

function setCanvas() {
  _canvas = document.getElementById('canvas');
  _stage = _canvas.getContext('2d');
  _canvas.width = _puzzleWidth;
  _canvas.height = _puzzleHeight;
  _canvas.style.border = "1px solid black";
}

function initPuzzle() {
  _pieces = [];
  _mouse = {x: 0, y: 0};
  _currentPiece = null;
  _currentDropPiece = null;
  _stage.drawImage(_img, 0, 0, _puzzleWidth, _puzzleHeight, 0, 0, _puzzleWidth, _puzzleHeight);
  createTitle("Click to Start Puzzle");
  buildPieces();
}

function createTitle(msg) {
  _stage.fillStyle = "#000000";
  _stage.globalAlpha = .4;
  _stage.fillRect(100, _puzzleHeight - 40, _puzzleWidth - 200, 40);
  _stage.fillStyle = "#FFFFFF";
  _stage.globalAlpha = 1;
  _stage.textAlign = "center";
  _stage.textBaseline = "middle";
  _stage.font = "60px Arial";
  _stage.fillText(msg, _puzzleWidth / 2, _puzzleHeight - 20);
}

function buildPieces() {
  var i;
  var piece;
  var xPos = 0;
  var yPos = 0;
  for (i = 0; i < PUZZLE_DIFFICULTY * PUZZLE_DIFFICULTY; i++) {
    piece = {};
    piece.sx = xPos;
    piece.sy = yPos;
    _pieces.push(piece);
    xPos += _pieceWidth;
    if (xPos >= _puzzleWidth) {
      xPos = 0;
      yPos += _pieceHeight;
    }
  }

  document.ondragstart = shufflePuzzle;


}

function shufflePuzzle() {
  console.log("click");
  _pieces = shuffleArray(_pieces);
  _stage.clearRect(0, 0, _puzzleWidth, _puzzleHeight);
  var i;
  var piece;
  var xPos = 0;
  var yPos = 0;
  for (i = 0; i < _pieces.length; i++) {
    piece = _pieces[i];
    piece.xPos = xPos;
    piece.yPos = yPos;
    _stage.drawImage(_img, piece.sx, piece.sy, _pieceWidth, _pieceHeight, xPos, yPos, _pieceWidth, _pieceHeight);
    _stage.strokeRect(xPos, yPos, _pieceWidth, _pieceHeight);
    xPos += _pieceWidth;
    if (xPos >= _puzzleWidth) {
      xPos = 0;
      yPos += _pieceHeight;
    }
  }
  var div = document.createElement("div");
  div.setAttribute("id", "divImg");
  var insertar =document.getElementById("time");
  document.body.insertBefore(div,insertar );
  var img = document.createElement("img");
  img.setAttribute("src",  _img.src);
  document.getElementById("divImg").appendChild(img);




  document.ondragstart = onPuzzleClick;

}

function onPuzzleClick(e) {
  if (e.layerX || e.layerX == 0) {
    _mouse.x = e.layerX - _canvas.offsetLeft;
    _mouse.y = e.layerY - _canvas.offsetTop;
  } else if (e.offsetX || e.offsetX == 0) {
    _mouse.x = e.offsetX - _canvas.offsetLeft;
    _mouse.y = e.offsetY - _canvas.offsetTop;
  }
  _currentPiece = checkPieceClicked();
  if (_currentPiece != null) {
    _stage.clearRect(_currentPiece.xPos, _currentPiece.yPos, _pieceWidth, _pieceHeight);
    _stage.save();
    _stage.globalAlpha = .9;
    _stage.drawImage(_img, _currentPiece.sx, _currentPiece.sy, _pieceWidth, _pieceHeight, _mouse.x - (_pieceWidth / 2), _mouse.y - (_pieceHeight / 2), _pieceWidth, _pieceHeight);
    _stage.restore();
    document.ondrag = updatePuzzle;
    document.ondragend = pieceDropped;
  }

}

function checkPieceClicked() {
  var i;
  var piece;
  for (i = 0; i < _pieces.length; i++) {
    piece = _pieces[i];
    if (_mouse.x < piece.xPos || _mouse.x > (piece.xPos + _pieceWidth) || _mouse.y < piece.yPos || _mouse.y > (piece.yPos + _pieceHeight)) {
      //PIECE NOT HIT
    } else {
      return piece;
    }
  }
  return null;
}

function updatePuzzle(e) {
  _currentDropPiece = null;
  if (e.layerX || e.layerX == 0) {
    _mouse.x = e.layerX - _canvas.offsetLeft;
    _mouse.y = e.layerY - _canvas.offsetTop;
  } else if (e.offsetX || e.offsetX == 0) {
    _mouse.x = e.offsetX - _canvas.offsetLeft;
    _mouse.y = e.offsetY - _canvas.offsetTop;
  }
  _stage.clearRect(0, 0, _puzzleWidth, _puzzleHeight);
  var i;
  var piece;
  for (i = 0; i < _pieces.length; i++) {
    piece = _pieces[i];
    if (piece == _currentPiece) {
      continue;
    }
    _stage.drawImage(_img, piece.sx, piece.sy, _pieceWidth, _pieceHeight, piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
    _stage.strokeRect(piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
    if (_currentDropPiece == null) {
      if (_mouse.x < piece.xPos || _mouse.x > (piece.xPos + _pieceWidth) || _mouse.y < piece.yPos || _mouse.y > (piece.yPos + _pieceHeight)) {
        //NOT OVER
      } else {
        _currentDropPiece = piece;
        _stage.save();
        _stage.globalAlpha = .4;
        _stage.fillStyle = PUZZLE_HOVER_TINT;
        _stage.fillRect(_currentDropPiece.xPos, _currentDropPiece.yPos, _pieceWidth, _pieceHeight);
        _stage.restore();
      }
    }
  }
  _stage.save();
  _stage.globalAlpha = .6;
  _stage.drawImage(_img, _currentPiece.sx, _currentPiece.sy, _pieceWidth, _pieceHeight, _mouse.x - (_pieceWidth / 2), _mouse.y - (_pieceHeight / 2), _pieceWidth, _pieceHeight);
  _stage.restore();
  _stage.strokeRect(_mouse.x - (_pieceWidth / 2), _mouse.y - (_pieceHeight / 2), _pieceWidth, _pieceHeight);
}

function pieceDropped(e) {
  document.ontouchmove = null;
  document.ontouchend = null;
  if (_currentDropPiece != null) {
    var tmp = {xPos: _currentPiece.xPos, yPos: _currentPiece.yPos};
    _currentPiece.xPos = _currentDropPiece.xPos;
    _currentPiece.yPos = _currentDropPiece.yPos;
    _currentDropPiece.xPos = tmp.xPos;
    _currentDropPiece.yPos = tmp.yPos;
  }
  resetPuzzleAndCheckWin();
}

function resetPuzzleAndCheckWin() {
  _stage.clearRect(0, 0, _puzzleWidth, _puzzleHeight);
  var gameWin = true;
  var i;
  var piece;
  for (i = 0; i < _pieces.length; i++) {
    piece = _pieces[i];
    _stage.drawImage(_img, piece.sx, piece.sy, _pieceWidth, _pieceHeight, piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
    _stage.strokeRect(piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
    if (piece.xPos != piece.sx || piece.yPos != piece.sy) {
      gameWin = false;
    }
  }
  if (gameWin) {
    setTimeout(gameOver, 500);

  }
}

function gameOver() {

  document.ontouchstart = null;
  document.ontouchmove = null;
  document.ontouchend = null;
  createTitle("PUZZLE FINISHED");
  // initPuzzle();

  var node = document.createElement("form");
  node.setAttribute("action", "./Results.html");
  node.setAttribute("id", "formButton");
  var insertar =document.getElementById("time");
  document.body.insertBefore(node,insertar );
  var button = document.createElement("button");
  button.setAttribute("onclick", "addUsername();");
  var textButton = document.createTextNode("Show Results");
  button.appendChild(textButton);
  document.getElementById("formButton").appendChild(button);


}

function shuffleArray(o) {
  for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) ;
  return o;
}

