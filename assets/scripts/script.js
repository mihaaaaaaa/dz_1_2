$(document).ready(function() {
	let name = 'Антон';
	let princess = 'Принцесса в другом замке!';

	function ez1(princess){
		alert('Добрый день, '+ name +'! '+ princess);
	}

	function ez2(num){
		let	b =  num * num;
		alert(b);
	}

		$('.dz1').click(function(){
			ez1('Принцесса в другом замке!');
		});

		$('.dz2').click(function(){
			ez2(5);
		});

	});