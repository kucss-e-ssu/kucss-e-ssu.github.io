// 방명록 폼과 리스트 요소를 가져옴
const guestbookForm = document.getElementById('guestbook-form');
const guestbookList = document.getElementById('guestbook-list');

// 폼 제출 이벤트 리스너
guestbookForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // 입력된 닉네임과 내용을 가져옴
    const nicknameInput = document.getElementById('nickname');
    const messageInput = document.getElementById('message');
    const nickname = nicknameInput.value;
    const message = messageInput.value;

    // 로컬 스토리지에 방명록 데이터를 가져옴 (이전 데이터 유지)
    const guestbookEntries = JSON.parse(localStorage.getItem('guestbookEntries')) || [];

    // 새로운 방명록 항목을 추가
    guestbookEntries.push({ nickname, message });

    // 로컬 스토리지에 업데이트된 데이터를 저장
    localStorage.setItem('guestbookEntries', JSON.stringify(guestbookEntries));

    // 방명록 리스트 업데이트
    updateGuestbookList();

    // 입력 필드 초기화
    nicknameInput.value = '';
    messageInput.value = '';
});

// 방명록 리스트 업데이트 함수
function updateGuestbookList() {
    const guestbookEntries = JSON.parse(localStorage.getItem('guestbookEntries')) || [];

    // 리스트 초기화
    guestbookList.innerHTML = '';

    // 방명록 항목을 카드 형식으로 추가
    guestbookEntries.forEach(entry => {
        const card = document.createElement('div');
        card.classList.add('card', 'mb-3');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = entry.nickname;

        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = entry.message;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);

        guestbookList.appendChild(card);
    });
}

// 페이지 로드 시 방명록 리스트 업데이트
updateGuestbookList();