// 1. Sử dụng axios để tải nội dung dưới dạng json từ đường link sau về và hiển ra trình duyệt sử dụng document.write
// Link: https://randomuser.me/api/
// Có thể tìm link tới thư viện axios tại: https://cdnjs.com/
// Để thêm thư viện vào jsfiddle, nhấn vào Resources ở cột trái, nhập link vào rồi ấn (+)
// 2. Làm tương tự, thay vì dùng axios, hãy dùng fetch (google để biết cách dùng)
const url="https://randomuser.me/api/"
var content ;
var data = axios.get(url).then(reponse=>reponse.data)
.catch(error =>console.log(error));
data.then((data)=>{
	console.log(JSON.stringify(data));
	//content = JSON.stringify(data);
	//console.log(content);
	return content = JSON.stringify(data);
}).then(render);
//console.log('Type of data is '+typeof(JSON.stringify(data)));
console.log(typeof JSON.stringify(data));
function render(){
	document.write(content);
}
