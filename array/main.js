var languages = [
    'Javascript',
    'PHP',
    'HTML',
    'CSS'
];

// chuyển mảng qua chuối
console.log(languages.toString()); // khi chuyển qua chuỗi mặc định ngăn cách item bằng dấu ,
console.log(languages.join(' - ')); // ngăn cách mảng được định nghĩa dấu ngăn cách thành chuối

// xóa phần tử cuối mảng
console.log(languages.pop()); // trả lại phần tử bị xóa

// thêm phần tử cuối mảng
console.log(languages.push('C#', 'JAVA')); // trả về độ dài mảng
console.log(languages.toString()); 

// xóa phần tử đầu mảng
console.log(languages.shift()); // trả về phần tử bị xóa

// thêm phần tử đầu mảng
console.log(languages.unshift('Android', 'C++'));
console.log(languages.toString()); 

// xóa cắt hoặc chèn
// tham số đầu vị trí bắt đầu xóa, tham số thứ hai vị kết thúc xóa
console.log(languages.splice(1, 1)); // trả về 1 mảng
// tham số đầu vị trí bắt đầu chèn, 0, tham số cuối là giá trị chèn
console.log(languages.splice(1, 0, 'Ruby')); // trả về 1 mảng
console.log(languages.toString()); 

// nối mảng
var languages1 = ['CSDL', 'MMT'];
console.log(languages.concat(languages1));

// cắt mảng
console.log(languages.slice(2, 3)); // dùng đẻ copy mảng (0)
console.log(languages.toString());
console.log(languages[languages.length-1]);
console.log(languages.slice(0, 1));