function solution(friends, gifts) {
    // 선물 수를 기록할 딕셔너리 초기화
    let sent = {};
    let received = {};
    let gift_index = {};

    // 각 친구의 선물 지수를 계산하기 위한 초기화
    friends.forEach(friend => {
        sent[friend] = {};
        received[friend] = {};
        gift_index[friend] = 0;
        friends.forEach(f => {
            sent[friend][f] = 0;
            received[friend][f] = 0;
        });
    });

    // 주고 받은 선물 기록
    gifts.forEach(gift => {
        let [giver, receiver] = gift.split(' ');
        sent[giver][receiver] += 1;
        received[receiver][giver] += 1;
    });

    // 선물 지수 계산
    friends.forEach(friend => {
        let total_sent = 0;
        let total_received = 0;
        friends.forEach(f => {
            total_sent += sent[friend][f];
            total_received += received[friend][f];
        });
        gift_index[friend] = total_sent - total_received;
    });

    // 다음달 받을 선물 수 계산
    let received_next_month = {};
    friends.forEach(friend => received_next_month[friend] = 0);

    for (let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            let friend_a = friends[i];
            let friend_b = friends[j];
            if (sent[friend_a][friend_b] > sent[friend_b][friend_a]) {
                received_next_month[friend_a] += 1;
            } else if (sent[friend_a][friend_b] < sent[friend_b][friend_a]) {
                received_next_month[friend_b] += 1;
            } else {
                if (gift_index[friend_a] > gift_index[friend_b]) {
                    received_next_month[friend_a] += 1;
                } else if (gift_index[friend_a] < gift_index[friend_b]) {
                    received_next_month[friend_b] += 1;
                }
            }
        }
    }

    // 가장 많은 선물을 받을 친구의 선물 수 반환
    return Math.max(...Object.values(received_next_month));
}