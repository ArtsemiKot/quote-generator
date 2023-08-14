const arr = ['If you fall asleep now, you will dream. If you study now, you will live your dream.',
    'When you think it’s too late, the truth is, it’s still early.',
    'The pain of studying is only temporary. But the pain of not knowing — ignorance — is forever.',
    'Studying is not about time. It’s about effort.',
    'Life is not all about studying. But if you can’t even conquer this little part of life, then what else can you possibly do?',
    'Success only comes with self-management and determination.',
    'If you don’t walk today, you’ll have to run tomorrow.',
    'The level of education is in direct correlation with your salary.',
    'When today is over, it will never come back.',
    'Even now, your enemies are eagerly flipping through books.'];

const dynamic_text = document.querySelector('.conteiner p');

function doDynamicText(arr, dynamic_text) {
    const index = Math.floor(Math.random() * (arr.length - 1));
    dynamic_text.innerHTML = arr[index];
}

setInterval(doDynamicText, 1000, arr, dynamic_text)