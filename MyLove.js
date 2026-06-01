const envelopeWrapper = document.getElementById("envelopeWrapper");
const letter = document.getElementById("letter");
const overlay = document.getElementById("overlay");
const btnTranslate = document.getElementById("btnTranslate");
const poeticText = document.getElementById("poeticText");
const btnNo = document.getElementById("btnNo");
const btnYes = document.getElementById("btnYes");
const successMessage = document.getElementById("successMessage");
const customAlert = document.getElementById("customAlert");

let isEnglish = true;

// النصوص المخزنة للترجمة المتبادلة
const textEn = `My Eternal Star,

They say the universe is vast, but my love for you expands infinitely faster. When the world falls into silence, I look up at the moon and see the soft glow of your smile, and in the bright stars, I see the light of your beautiful eyes. I love you so, so deeply. I even named a star in the heavens after you, so the universe itself knows you are my ultimate guide.

Please, never let your heart be heavy or sad because of my deep sleep. My body may rest, but my soul remains awake, guarding you in my prayers. I pray to the Almighty to always preserve your beautiful smile, to protect you from every harm, and to write your name next to mine as my destiny forever, My Queen. I could never bear to make you sad, not even for a single day. You are my peaceful sanctuary.`;

const textAr = `نجمتي الأبدية،

يقولون إن الكون واسع، لكن حبي لكِ يتمدد أضعافاً مضاعفة وبشكل أسرع بكثير. عندما يحل الصمت على العالم، أنظر إلى القمر فأرى وهج ابتسامتكِ الناعمة، وفي النجوم اللامعة أرى نور عينيكِ الجميلتين. أنا أحبكِ جداً جداً وبشكل أعمق مما تتخيلين.. حتى أنني سميتُ نجماً في السماء باسمكِ، ليعلم الكون نفسه أنكِ مرشدي وهدايَ الوحيد.

أرجوكِ، لا تدعي الحزن يمس قلبكِ بسبب نومي. قد يرتاح جسدي، لكن روحي تظل مستيقظة تحرسكِ في دعواتي. أدعو الله العلي القدير أن يحفظ ابتسامتكِ الجميلة دائماً، وأن يحميكِ من كل سوء، وأن يكتبكِ من نصيبي وتكوني قدري وإلى جواري للأبد يا ملكتي. أنا لا أطيق ولا أتحمل أن أزعلكِ في يوم من الأيام، فأنتِ ملجئي وسلامي الخاص.`;

// 1. فتح الظرف عند الضغط عليه
envelopeWrapper.addEventListener("click", () => {
  letter.classList.add("open");
  overlay.classList.add("show");
  envelopeWrapper.style.display = "none";
});

// 2. إغلاق الرسالة والعودة للظرف عند الضغط على الخلفية المعتمة
overlay.addEventListener("click", () => {
  letter.classList.remove("open");
  overlay.classList.remove("show");
  envelopeWrapper.style.display = "flex";
});

// 3. آلية عمل زر الترجمة (إنجليزي / عربي)
btnTranslate.addEventListener("click", () => {
  if (isEnglish) {
    poeticText.innerText = textAr;
    poeticText.classList.add("ar");
    btnTranslate.innerText = "Show English 🇬🇧";
    isEnglish = false;
  } else {
    poeticText.innerText = textEn;
    poeticText.classList.remove("ar");
    btnTranslate.innerText = "ترجمة للعربية 🌍";
    isEnglish = true;
  }
});

// 4. حركة هروب زر "لا" وإظهار إشعار العتاب اللطيف
btnNo.addEventListener("mouseover", moveButton);
btnNo.addEventListener("click", (e) => {
  e.preventDefault(); // منع أي سلوك افتراضي للضغط
  moveButton();
});

function moveButton() {
  const container = document.querySelector(".buttons-container");
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  // حساب مسافات عشوائية ذكية للهروب داخل الحاوية المخصصة للأزرار
  const randomX =
    Math.floor(Math.random() * (containerWidth - 80)) -
    (containerWidth / 2 - 40);
  const randomY =
    Math.floor(Math.random() * (containerHeight - 30)) -
    (containerHeight / 2 - 15);

  btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;

  // إظهار تنبيه العتاب العلوي
  customAlert.classList.add("show");
  setTimeout(() => {
    customAlert.classList.remove("show");
  }, 2500);
}

// 5. عند الضغط على زر "نعم"
btnYes.addEventListener("click", () => {
  successMessage.style.display = "block";
  btnNo.style.display = "none";
  btnYes.style.display = "none";
  document.querySelector(".question").style.display = "none";

  successMessage.scrollIntoView({ behavior: "smooth" });
});
s;
