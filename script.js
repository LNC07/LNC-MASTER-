let balance = localStorage.getItem('balance') ? parseInt(localStorage.getItem('balance')) : 0;
let level = 1;
let perClickCoins = 1;
let dailyLimit = 1000;
let earnedToday = 0;

document.getElementById('balance').textContent = balance;

// মুদ্রার ক্লিক ইভেন্ট হ্যান্ডলার
document.getElementById('coin').addEventListener('click', function() {
    if (earnedToday < dailyLimit) {
        balance += perClickCoins;
        earnedToday += perClickCoins;
        localStorage.setItem('balance', balance);
        document.getElementById('balance').textContent = balance;
    } else {
        alert("Daily limit reached!");
    }
});

// টাস্ক বোতাম ক্লিক করলে টাস্ক মোডাল খোলা
document.getElementById('tasks').addEventListener('click', function() {
    document.getElementById('task-modal').style.display = "block";
});

// বুস্ট বোতাম ক্লিক করলে বুস্ট মোডাল খোলা
document.getElementById('boost').addEventListener('click', function() {
    document.getElementById('boost-modal').style.display = "block";
});

// উত্তোলন বোতাম ক্লিক করলে বার্তা প্রদর্শন
document.getElementById('withdrawal').addEventListener('click', function() {
    alert("Coin listed on October 25, 2024");
});

// মোডাল বন্ধ করার জন্য ক্লোজ বোতাম ক্লিক ইভেন্ট হ্যান্ডলার
let modals = document.getElementsByClassName('close');
for (let i = 0; i < modals.length; i++) {
    modals[i].addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
}

// চ্যানেলে যোগদানের জন্য পুরস্কার দাবি
document.getElementById('claim-reward').addEventListener('click', function() {
    balance += 1000;
    localStorage.setItem('balance', balance);
    document.getElementById('balance').textContent = balance;
    document.getElementById('task-modal').style.display = "none";
    alert("1000 coins added for joining the channel!");
});

// স্তর আপগ্রেড করার জন্য বোতাম ক্লিক হ্যান্ডলার
document.getElementById('upgrade').addEventListener('click', function() {
    let upgradeCost = level * 500;
    if (balance >= upgradeCost) {
        balance -= upgradeCost;
        level++;
        perClickCoins++;
        localStorage.setItem('balance', balance);
        document.getElementById('balance').textContent = balance;
        document.getElementById('level').textContent = level;
        document.getElementById('upgrade-cost').textContent = level * 500;
        alert("Level upgraded!");
    } else {
        alert("Not enough coins to upgrade!");
    }
});

// দৈনিক সীমা আপগ্রেড করার জন্য বোতাম ক্লিক হ্যান্ডলার
document.getElementById('upgrade-limit').addEventListener('click', function() {
    let limitUpgradeCost = dailyLimit * 1.5;
    if (balance >= limitUpgradeCost) {
        balance -= limitUpgradeCost;
        dailyLimit += 1000;
        localStorage.setItem('balance', balance);
        document.getElementById('balance').textContent = balance;
        document.getElementById('limit').textContent = dailyLimit;
        document.getElementById('limit-cost').textContent = dailyLimit * 1.5;
        alert("Daily limit upgraded!");
    } else {
        alert("Not enough coins to upgrade the daily limit!");
    }
});
