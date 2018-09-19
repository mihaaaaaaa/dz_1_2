$(document).ready(function() {
	let name = 'Антон';
	let princess = 'Принцесса в другом замке!';
	let num = 5;

	function ez1(){
		alert('Добрый день, '+ name +'! '+ princess);
	}

	function ez2(){
		let	b =  num * num;
		alert(b);
	}

		$('.dz1').click(function(){
			ez1();
		});

		$('.dz2').click(function(){
			ez2();
		});

	});