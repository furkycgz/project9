
// Sayfa yüklendiğinde kullanıcı adını sor
window.onload = askUserName;

// O anki saati ve günü gösteren fonksiyon
function showDateTime() {
    const now = new Date();
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const dayName = days[now.getDay()];
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${dayName}`;
    
    document.getElementById("myClock").innerText = `Şu anki saat: ${timeString}, Gün: ${dateString}`;
    
   
}

// Sayfa yüklendiğinde saati ve günü göster
window.onload = showDateTime;

// Her saniye güncellenmesi için interval ayarla
setInterval(showDateTime, 1000);


function askUserName() {
    const userName = prompt("Lütfen adinizi giriniz:");
    if (userName) {
        document.getElementById("myName").innerText =  userName ;
    } else {
        document.getElementById("myName").innerText = "Merhaba, misafir!";
    }
}
// Sayfa yüklendiğinde kullanıcı adını sor
window.onload = askUserName;