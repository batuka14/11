document.addEventListener('DOMContentLoaded',()=>{
	// alert("test");
	let bird=document.querySelector('.bird');
	let gameDisplay=document.querySelector('.game-container');
	let ground=document.querySelector('.ground');
	let birdLeft=220;
	let birdBottom=350;
	let gravity=2;
	let isGameOver=false;
	function startGame(){
		birdBottom=birdBottom-gravity;
		bird.style.left=birdLeft+"px";
		bird.style.bottom=birdBottom+"px";
	}
	let gameTime=setInterval(startGame, 20);
	function control(e){
		if(e.keyCode==32){
			jump();
		}
	}
	function jump(){
		if(birdBottom<490){
			birdBottom+=50;
		}
		bird.style.bottom=birdBottom+"px";
	}
	document.addEventListener('keydown',control);
	function createBlock(){
		let block=document.createElement('div');
		if(isGameOver!==true){
			block.classList.add('block');
		}
		gameDisplay.appendChild(block);
		let blockLeft=500;
		let blockBottom=Math.random()*100;
		block.style.left=blockLeft+"px";
		block.style.bottom=blockBottom+"px";
		function moveBlock(){
			blockLeft-=2;
			block.style.left=blockLeft+"px";
			if(blockLeft==-60){
				clearInterval(blockTime);
				gameDisplay.removeChild(block);
			}
			if(birdBottom==0 || birdLeft==220 && blockLeft<=275 && blockLeft>=215 && birdBottom<blockBottom+145){
				gameOver();
				clearInterval(blockTime);
			}
		}
		let blockTime=setInterval(moveBlock, 15);
		if(isGameOver==false){
			setTimeout(createBlock,1500);
		}
	}
	function createBlock2(){
		let block2=document.createElement('div');
		if(isGameOver!==true){
			block2.classList.add('block2');
		}
		gameDisplay.appendChild(block2);
		let block2Left=500;
		let block2Bottom=Math.random()*500;
		block2.style.left=block2Left+"px";
		block2.style.bottom=block2Bottom+"px";
		function moveBlock2(){
			block2Left-=2;
			block2.style.left=block2Left+"px";
			if(block2Left==-60){
				clearInterval(block2Time);
				gameDisplay.removeChild(block2);
			}
			if(birdBottom==0 || birdLeft==220 && block2Left<=275 && block2Left>=215 && birdBottom<block2Bottom+145){
				gameOver();
				clearInterval(block2Time);
			}
		}
		let block2Time=setInterval(moveBlock2, 15);
		if(isGameOver==false){
			setTimeout(createBlock2,1500);
		}
	}
	createBlock();
	function gameOver(){
		clearInterval(gameTime);
		document.removeEventListener('keydown',control);
		isGameOver=true;
	}
})