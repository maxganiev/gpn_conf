// document.addEventListener('DOMContentLoaded', () => {
// 	const form = document.getElementById('form');
// 	const fileupload = document.getElementById('fileupload');

// 	fileupload.addEventListener('change', (e) => {
// 		if (e.target.value.slice(-3) !== 'csv') {
// 			alert('CSV files are permitted only!');
// 			e.target.value = '';
// 		}
// 	});

// 	form.addEventListener('submit', async (e) => {
// 		e.preventDefault();

// 		if (fileupload.files.length > 0) {
// 			const formData = new FormData();
// 			formData.append('fileupload', fileupload.files[0], fileupload.files[0].name);

// 			try {
// 				const req = await fetch('./main.php', {
// 					method: 'POST',
// 					body: formData,
// 				});

// 				if (req.status === 200) {
// 					const res = await req.json();
// 					alert(res);
// 				}
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		}
// 	});
// });
