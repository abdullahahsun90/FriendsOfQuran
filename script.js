document.addEventListener("DOMContentLoaded", () => {
  // Surah data
  const surahData = [
    {
      number: 1,
      urduName: "الفاتحة",
      englishName: "Al-Fatiha",
      ayahs: 7,
      taaruf: `
<h2>سورۃ الفاتحہ - تعارف</h2>
<p>سورۃ الفاتحہ قرآن مجید کی پہلی اور سب سے عظیم سورت ہے جسے "ام القرآن" بھی کہا جاتا ہے۔ یہ مکہ مکرمہ میں نازل ہوئی اور اس میں سات آیات ہیں۔</p>

<h3>شان نزول:</h3>
<p>حضرت محمد ﷺ پر سب سے پہلے جو وحی نازل ہوئی وہ سورۃ العلق کی ابتدائی آیات تھیں، لیکن سورۃ الفاتحہ پہلی مکمل سورت ہے جو ایک ساتھ نازل ہوئی۔ یہ سورت قرآن کی تلخیص اور خلاصہ ہے، اور ہر مسلمان کی روزانہ کی عبادات کا لازمی حصہ ہے۔</p>

<h3>اہمیت و فضیلت:</h3>
<ul>
  <li>📿 <b>نماز کا لازمی حصہ:</b> ہر رکعت میں کم از کم ایک بار پڑھنا فرض ہے۔ رسول اللہ ﷺ نے فرمایا: "جس نے فاتحۃ الکتاب نہیں پڑھی، اس کی نماز نہیں ہوئی" (صحیح بخاری)</li>
  <li>🌟 <b>ام القرآن:</b> اس سورت کو "ام القرآن" یعنی قرآن کا خلاصہ اور روح بھی کہا جاتا ہے۔</li>
  <li>🤲 <b>اللہ اور بندے کے درمیان رابطہ:</b> حدیث قدسی میں آیا ہے کہ اللہ تعالیٰ نے فرمایا: "میں دو حصوں میں تقسیم ہوں، جب بندہ مجھ سے دعا کرتا ہے تو میں اس کی دعا دیتا ہوں۔"</li>
  <li>💡 <b>تمام معارف کا خلاصہ:</b> اس میں توحید، عبادت، استغاثہ، اور ہدایت کے بنیادی اصول شامل ہیں۔</li>
</ul>

<h3>مرکزی مضامین:</h3>
<ol>
  <li>🕌 <b>اللہ کی حمد و ثناء:</b> اللہ کی تعریف اور تمام تعریفوں کا حق ادا کرنا۔</li>
  <li>👑 <b>ربوبیت کا اقرار:</b> اللہ کو تمام جہانوں کا مالک اور رب تسلیم کرنا۔</li>
  <li>⚖️ <b>یوم آخرت پر ایمان:</b> روز جزا کے دن کا مالک اور حاکم ہونا۔</li>
  <li>🙏 <b>عبادت کی منفرد نوعیت:</b> صرف اللہ کی بندگی اور عبادت۔</li>
  <li>🤝 <b>استعانت کا اظہار:</b> صرف اللہ سے مدد مانگنا اور انحصار کرنا۔</li>
  <li>🛤️ <b>ہدایت کی دعا:</b> سیدھے راستے کی رہنمائی کی دعا۔</li>
</ol>

<h3>مزید نکات:</h3>
<ul>
  <li>📖 <b>روزمرہ کی تلاوت:</b> قرآن کے علاوہ سب سے زیادہ پڑھی جانے والی سورت۔</li>
  <li>🕋 <b>نماز کی روح:</b> ہر نماز کی بنیاد اور قلب ہے۔</li>
  <li>🌈 <b>ہمہ گیر تعلیمات:</b> زندگی کے ہر پہلو کے لیے جامع رہنمائی۔</li>
  <li>🧘 <b>روحانی سکون:</b> پڑھنے والے کو سکون اور اطمینان بخشتی ہے۔</li>
</ul>
      `,
        aadaad: `
        <div class="surah-fatihah-extended-stats" dir="rtl" lang="ur" style="font-family: 'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', serif; max-width: 700px; margin: 30px auto; padding: 30px; background: #f9f9f9; border-radius: 12px; box-shadow: 0 0 20px #bbb; color: #34495e;">

  <h2 style="text-align: center; font-size: 34px; margin-bottom: 30px; color: #2e4053;">
    سورۃ الفاتحہ کے اضافی اعداد و شمار اور تفصیلات
  </h2>

  <table style="width: 100%; border-collapse: collapse; font-size: 18px; margin-bottom: 30px; direction: rtl;">
    <thead>
      <tr style="background: #1f618d; color: white; text-align: center;">
        <th style="padding: 14px; border: 1px solid #154360;">موضوع</th>
        <th style="padding: 14px; border: 1px solid #154360;">تفصیل</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: #d4e6f1; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;">آیات کی تعداد</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">۷ آیات</td>
      </tr>
      <tr style="background: #ebf5fb; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;">کل الفاظ کی تعداد</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">۳۵ سے زائد</td>
      </tr>
      <tr style="background: #d4e6f1; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;">کل منفرد الفاظ</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">۲۵ کے قریب</td>
      </tr>
      <tr style="background: #ebf5fb; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;">کل حروف</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">۲۰۰ سے زائد</td>
      </tr>
      <tr style="background: #d4e6f1; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;">سب سے طویل آیت</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">آیت ۵ (الحمد للہ رب العالمین)</td>
      </tr>
      <tr style="background: #ebf5fb; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;">سب سے مختصر آیت</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">آیت ۷ (صراط المستقیم)</td>
      </tr>
      <tr style="background: #d4e6f1; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;">بار بار آنے والا لفظ</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">"اللہ" (۳ مرتبہ)</td>
      </tr>
    </tbody>
  </table>

  <h3 style="font-size: 26px; margin-bottom: 20px; border-bottom: 3px solid #1f618d; padding-bottom: 10px; color: #1b4f72;">
    موضوعات کے لحاظ سے آیات کے مرکزی مضامین
  </h3>

  <ul style="font-size: 18px; line-height: 1.8; padding-right: 20px; color: #34495e;">
    <li>اللہ کی حمد و ثناء اور صفات</li>
    <li>اللہ کی ربوبیت اور مالکیت کا اقرار</li>
    <li>عبادت اور بندگی کی یکتائی</li>
    <li>ہدایت کی درخواست اور راستے کی تعیین</li>
    <li>نیکی اور برائی کے راستوں میں فرق</li>
    <li>معافی اور رحمت کی درخواست</li>
  </ul>

  <h3 style="font-size: 26px; margin-top: 40px; margin-bottom: 20px; border-bottom: 3px solid #1f618d; padding-bottom: 10px; color: #1b4f72;">
    سورۃ الفاتحہ کی فضیلت اور اہمیت کے حوالے سے چند اہم نکات
  </h3>

  <ol style="font-size: 18px; line-height: 1.8; padding-right: 20px; color: #34495e;">
    <li>نماز کا لازمی رکن ہونا اور ہر رکعت میں پڑھنا ضروری ہے۔</li>
    <li>یہ سورت قرآن کا خلاصہ اور روحانی سرچشمہ ہے۔</li>
    <li>یہ سورت اللہ اور بندے کے درمیان گفتگو کی حیثیت رکھتی ہے۔</li>
    <li>حدیث قدسی میں اس سورت کی عظمت کو بیان کیا گیا ہے۔</li>
    <li>اس کے بغیر نماز مکمل نہیں ہوتی۔</li>
    <li>سورۃ الفاتحہ کو "ام الکتاب" یعنی قرآن کی ماں کہا جاتا ہے۔</li>
  </ol>

</div>

        `,
        maujzaat: `<p>.This section will be filled later</p>`,
      rukoos: [
{
  "number": 1,
  "arabic": 
    "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ ﴿١﴾\n" +
    "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ ﴿٢﴾\n" +
    "ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ ﴿٣﴾\n" +
    "مَـٰلِكِ يَوْمِ ٱلدِّينِ ﴿٤﴾\n" +
    "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾\n" +
    "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ ﴿٦﴾\n" +
    "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ ﴿٧﴾",
  "translation": 
    "شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے (١)\n" +
    "سب تعریفیں اللہ ہی کے لیے ہیں جو تمام جہانوں کا رب ہے (٢)\n" +
    "بڑا مہربان نہایت رحم والا (٣)\n" +
    "جزا کے دن کا مالک (٤)\n" +
    "ہم تیری ہی عبادت کرتے ہیں اور تجھی سے مدد مانگتے ہیں (٥)\n" +
    "ہمیں سیدھا راستہ دکھا (٦)\n" +
    "ان لوگوں کا راستہ جن پر تو نے انعام فرمایا، جو غضب کا شکار نہیں ہوئے اور گمراہ نہیں ہوئے (٧)",
  "tafseer": 
    "<h3>تفسیر:</h3>" +
    "<p><b>بسم اللہ الرحمن الرحیم:</b> ہر عمل کی ابتدا اللہ کے نام سے کرنی چاہیے، جو نہایت مہربان اور رحم کرنے والا ہے۔ 'رحمن' سے مراد خدا کی عام رحمت ہے جو تمام مخلوق پر ہے، جبکہ 'رحیم' خاص مومنوں کے لیے خاص رحمت ہے۔</p>" +
    "<p><b>الحمد للہ رب العالمین:</b> تمام حمد اور شکر اسی اللہ کے لیے ہے جو تمام جہانوں کا پروردگار، پالنے والا اور سنبھالنے والا ہے۔ یہ اقرار ہے کہ ساری تعریفیں اللہ کے لیے ہیں۔</p>" +
    "<p><b>الرحمن الرحیم:</b> اللہ کی رحمت کی وسعت اور دوام کو بیان کیا گیا ہے۔ یہ صفات اللہ کی خاص رحمت کو ظاہر کرتی ہیں جو ہر وقت جاری و ساری ہے۔</p>" +
    "<p><b>مالک یوم الدین:</b> اللہ ہی جزا و سزا کے دن کا مالک ہے جب ہر انسان کے اعمال کا حساب لیا جائے گا۔ یہ آخرت کی حقیقت اور اس کے حساب کتاب پر ایمان کی بنیاد ہے۔</p>" +
    "<p><b>إياك نعبد وإياك نستعين:</b> ہم صرف تیری ہی عبادت کرتے ہیں اور تجھی سے مدد چاہتے ہیں۔ یہ کلمہ توحید اور اللہ پر مکمل انحصار کی نمائندگی کرتا ہے۔</p>" +
    "<p><b>اهدنا الصراط المستقيم:</b> ہم اللہ سے سیدھا اور درست راستہ دکھانے کی دعا کرتے ہیں جو ہمارے لیے راہنمائی کا باعث ہو۔</p>" +
    "<p><b>صراط الذين أنعمت عليهم غير المغضوب عليهم ولا الضالين:</b> یہ وہ راستہ ہے جو اللہ نے ان لوگوں کو دیا ہے جن پر اس نے اپنی نعمتیں نازل کی ہیں، نہ کہ ان لوگوں کا جن پر غضب نازل ہوا یا جو گمراہ ہیں۔</p>",
  "bullets": 
    "<h3>نکات:</h3>" +
    "<ul>" +
      "<li>📖 بسم اللہ ہر نیک کام کی ابتدا کے لیے سنت ہے۔</li>" +
      "<li>🕌 الحمد للہ کا کلمہ اللہ کی وحدانیت اور ربوبیت کا اقرار ہے۔</li>" +
      "<li>🌍 الرحمن والرحیم اللہ کی وسیع رحمت اور محبت کی نشاندہی کرتے ہیں۔</li>" +
      "<li>⚖ مالک یوم الدین سے قیامت اور آخرت پر ایمان کی تاکید ملتی ہے۔</li>" +
      "<li>🙏 إياك نعبد وإياك نستعين میں توحید اور اللہ پر مکمل بھروسہ ہے۔</li>" +
      "<li>🛤️ اهدنا الصراط المستقيم سے ہدایت اور سیدھا راستہ طلب کرنے کی اہمیت۔</li>" +
      "<li>✨ صراط الذين أنعمت عليهم غیر المغضوب عليهم ولا الضالين میں اللہ کی نعمتوں سے نوازے گئے راستے کی پہچان۔</li>" +
    "</ul>",
  "quizLink": "https://forms.gle/N1F74K3RutyX5qNs6"
}
      ]
    },
    {
      number: 2,
      urduName: "البقرة",
      englishName: "Al-Baqarah",
      ayahs: 286,
      taaruf: `
<h2>📖 سورۃ البقرہ - تعارف</h2>

<p>
  سورۃ البقرہ مدینہ منورہ میں نازل ہونے والی قرآن مجید کی سب سے طویل اور جامع سورت ہے، جس کی 286 آیات، 40 رکوع، اور تقریباً ڈھائی پاروں پر مشتمل ہے۔ 
  اس میں اسلامی معاشرتی، معاشی، اخلاقی، قانونی اور فکری نظام کی تفصیل بیان کی گئی ہے۔ 
  سورت کا نام "البقرہ" (گائے) ایک نمایاں واقعہ کی مناسبت سے رکھا گیا ہے جو بنی اسرائیل کے ایک اہم امتحان سے متعلق ہے۔
</p>

<br/>

<h3>📌 شانِ نزول:</h3>
<p>
  سورۃ البقرہ مکمل طور پر مدنی دور میں نازل ہوئی، اور اس کا نزول مختلف اوقات میں تقریباً دس سال کے عرصے میں ہوا۔
  اس میں مسلمانوں کے ایک منظم اور خودمختار معاشرے کی تشکیل کے لیے بنیادی ہدایات دی گئیں، جو ہجرت کے بعد کے حالات سے براہ راست تعلق رکھتی ہیں۔ 
  یہ سورت مدینہ میں موجود یہودی قبائل، اہلِ کتاب اور منافقین کے رویوں کا جائزہ لیتی ہے اور مسلمانوں کو ان سے نمٹنے کی رہنمائی دیتی ہے۔
</p>

<br/>

<h3>✨ اہمیت و فضیلت:</h3>
<p>
  رسول اللہ ﷺ نے فرمایا: <strong>"سورۃ البقرہ کی تلاوت گھر میں کرنے سے شیطان بھاگ جاتا ہے"</strong> (صحیح مسلم)۔<br/>
  اس کی آخری دو آیات (آمن الرسول...) کی تلاوت کو خاص روحانی تحفظ حاصل ہے، اور ان آیات کو <strong>"خزانہ عرش"</strong> سے نازل شدہ قرار دیا گیا ہے۔<br/>
  بعض احادیث میں آیا ہے کہ یہ <strong>"سیکھنے والی سورت"</strong> ہے کیونکہ اس میں دینِ اسلام کا دستورِ حیات واضح انداز میں پیش کیا گیا ہے۔
</p>

<br/>

<h3>🧭 مرکزی مضامین:</h3>
<ul>
  <li>🟢 <strong>قرآن کی عظمت اور ہدایت:</strong> سورت کے آغاز میں قرآن کی صفات، تقویٰ والوں کے لیے اس کی رہنمائی، اور ایمان و انکار کے فرق کو اجاگر کیا گیا ہے۔</li>
  
  <li>🟢 <strong>بنی نوع انسان کا مقام:</strong> حضرت آدمؑ کی خلافت، فرشتوں کا سوال، اور علم کی فضیلت کے ذریعے انسان کے شرف و اختیار کی وضاحت کی گئی ہے۔</li>
  
  <li>🟢 <strong>بنی اسرائیل کی تاریخ اور انحراف:</strong> بنی اسرائیل کی نافرمانیاں، تحریف دین، ظاہری رسموں کی پابندی اور دل کی سختی کو تفصیل سے بیان کر کے مسلمانوں کو عبرت دلائی گئی ہے۔</li>
  
  <li>🟢 <strong>دعوتِ ابراہیمی کا تسلسل:</strong> حضرت ابراہیم علیہ السلام کے ذریعہ دین حنیف کی بنیاد، قبلہ کی تبدیلی، بیت اللہ کی مرکزیت اور امت مسلمہ کی ذمہ داریوں کا بیان ہے۔</li>
  
  <li>🟢 <strong>شریعت اور اجتماعی احکام:</strong> نماز، روزہ، زکوٰۃ، حج، قصاص، وصیت، روزمرہ کے لین دین، نکاح و طلاق، یتیموں کے حقوق، حلال و حرام، سود کی ممانعت اور مالی معاملات کے اصول تفصیل سے بیان کیے گئے ہیں۔</li>
  
  <li>🟢 <strong>جہاد، قربانی اور آزمائش:</strong> جہاد کی حکمت، دشمن سے مقابلے کے اصول، اور ایمان والوں کی قربانیوں کا ذکر کر کے مسلمانوں کو صبر، حوصلہ اور عزم کی تلقین کی گئی ہے۔</li>
  
  <li>🟢 <strong>نفاق اور اہل کتاب کی سازشیں:</strong> منافقین کے دوغلے پن، اور یہود و نصاریٰ کی چالوں کا ذکر کر کے مسلمانوں کو فکری اور عملی بیداری کی دعوت دی گئی ہے۔</li>
</ul>

<br/>

<h3>⚖️ عصری پیغام:</h3>
<p>
  سورۃ البقرہ نہ صرف ایک الٰہی دستور ہے بلکہ ہر دور کے مسلمانوں کے لیے ایک مکمل ضابطۂ حیات ہے۔ 
  یہ فرد، خاندان، اور ریاست کی سطح پر اسلامی اصولوں کا اطلاق سکھاتی ہے۔ 
  آج کے دور میں جب مغربی افکار کی یلغار اور اخلاقی زوال کا سامنا ہے، سورۃ البقرہ ہمیں قرآن سے رہنمائی، استقامت، اور عملی شعور عطا کرتی ہے۔
</p>

      `,
        aadaad: `<div class="surah-baqarah-extended-stats" dir="rtl" lang="ur" style="font-family: 'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', serif; max-width: 950px; margin: 30px auto; padding: 30px; background: #f9f9f9; border-radius: 12px; box-shadow: 0 0 20px #bbb; color: #34495e;">

  <h2 style="text-align: center; font-size: 34px; margin-bottom: 30px; color: #2e4053;">
    سورۃ البقرہ کے اضافی اعداد و شمار اور تفصیلات
  </h2>

  <table style="width: 100%; border-collapse: collapse; font-size: 18px; margin-bottom: 30px; direction: rtl;">
    <thead>
      <tr style="background: #1f618d; color: white; text-align: center;">
        <th style="padding: 14px; border: 1px solid #154360;">موضوع</th>
        <th style="padding: 14px; border: 1px solid #154360;">تفصیل</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: #d4e6f1; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;">کل منفرد الفاظ (یونیک)</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">۱۵۰۰ سے زائد</td>
      </tr>
      <tr style="background: #ebf5fb; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;">کل آیات کی اوسط لمبائی (الفاظ میں)</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">۲۱.۶ الفاظ فی آیت</td>
      </tr>
      <tr style="background: #d4e6f1; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;"> سب سے طویل آیت</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">آیت ۲۸۲ (حدود ۱۲۹ الفاظ)</td>
      </tr>
      <tr style="background: #ebf5fb; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;"> سب سے مختصر آیت</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">آیت ۲ (۳ الفاظ)</td>
      </tr>
      <tr style="background: #d4e6f1; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;">کل جملے</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">۹۰۰ سے زائد</td>
      </tr>
      <tr style="background: #d4e6f1; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;">متعدد بار آنے والے لفظ: "القرآن"</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">۱۰ مرتبہ</td>
      </tr>
      <tr style="background: #ebf5fb; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;">متعدد بار آنے والے لفظ: "نار"</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">۳۰ مرتبہ</td>
      </tr>
      <tr style="background: #d4e6f1; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;">متعدد بار آنے والے لفظ: "ایمان"</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">۴۲ مرتبہ</td>
      </tr>
    </tbody>
  </table>

  <h3 style="font-size: 26px; margin-bottom: 20px; border-bottom: 3px solid #1f618d; padding-bottom: 10px; color: #1b4f72;">
    موضوعات کے لحاظ سے آیات کی تعداد
  </h3>

  <table style="width: 100%; border-collapse: collapse; font-size: 18px; margin-bottom: 30px; direction: rtl;">
    <thead>
      <tr style="background: #2874a6; color: white; text-align: center;">
        <th style="padding: 14px; border: 1px solid #1b4f72;">موضوع</th>
        <th style="padding: 14px; border: 1px solid #1b4f72;">آیات کی تعداد</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: #d6eaf8; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;">توحید (اللہ کی وحدانیت)</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">۶۵ آیات</td>
      </tr>
      <tr style="background: #ebf5fb; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;">عبادات (نماز، روزہ، زکوٰۃ)</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">۵۰ آیات</td>
      </tr>
      <tr style="background: #d6eaf8; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;">معاملات اور قانون</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">۸۰ آیات</td>
      </tr>
      <tr style="background: #ebf5fb; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;">اخلاق اور معاشرت</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">۴۰ آیات</td>
      </tr>
      <tr style="background: #d6eaf8; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;">قصص (کہانیاں)</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">۱۵ آیات</td>
      </tr>
      <tr style="background: #ebf5fb; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;">منافقین کے متعلق</td>
        <td style="padding: 12px; border: 1px solid #a9cce3;">۲۵ آیات</td>
      </tr>
    </tbody>
  </table>

  <h3 style="font-size: 26px; margin-bottom: 20px; border-bottom: 3px solid #1f618d; padding-bottom: 10px; color: #1b4f72;">
    بار بار آنے والے دوسرے اہم الفاظ
  </h3>

  <table style="width: 100%; border-collapse: collapse; font-size: 18px; margin-bottom: 20px; direction: rtl;">
    <thead>
      <tr style="background: #2874a6; color: white; text-align: center;">
        <th style="padding: 14px; border: 1px solid #1b4f72;">لفظ</th>
        <th style="padding: 14px; border: 1px solid #1b4f72;">تعداد</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: #d6eaf8; text-align: center;">
        <td style="padding: 12px; border: 1px solid #a9cce3;">اللہ</td>
<td style="padding: 12px; border: 1px solid #a9cce3;">۲۸۴ بار</td>
</tr>
<tr style="background: #ebf5fb; text-align: center;">
<td style="padding: 12px; border: 1px solid #a9cce3;">رب</td>
<td style="padding: 12px; border: 1px solid #a9cce3;">۶۰ بار</td>
</tr>
<tr style="background: #d6eaf8; text-align: center;">
<td style="padding: 12px; border: 1px solid #a9cce3;">ایمان</td>
<td style="padding: 12px; border: 1px solid #a9cce3;">۴۲ بار</td>
</tr>
<tr style="background: #ebf5fb; text-align: center;">
<td style="padding: 12px; border: 1px solid #a9cce3;">کافر</td>
<td style="padding: 12px; border: 1px solid #a9cce3;">۳۸ بار</td>
</tr>
<tr style="background: #d6eaf8; text-align: center;">
<td style="padding: 12px; border: 1px solid #a9cce3;">نبی</td>
<td style="padding: 12px; border: 1px solid #a9cce3;">۲۵ بار</td>
</tr>
<tr style="background: #ebf5fb; text-align: center;">
<td style="padding: 12px; border: 1px solid #a9cce3;">قیامت</td>
<td style="padding: 12px; border: 1px solid #a9cce3;">۲۰ بار</td>
</tr>
<tr style="background: #d6eaf8; text-align: center;">
<td style="padding: 12px; border: 1px solid #a9cce3;">کتاب</td>
<td style="padding: 12px; border: 1px solid #a9cce3;">۱۸ بار</td>
</tr>
</tbody>

</table> <p style="text-align: center; font-style: italic; color: #566573; margin-top: 40px;">
</p>
</div>`,
        maujzaat: `<p>.This section will be filled later</p>`,
      rukoos: [
{
  "number": 1,
  "arabic": `
    الم ﴿١﴾<br>
    ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ ﴿٢﴾<br>
    ٱلَّذِينَ يُؤۡمِنُونَ بِٱلۡغَيۡبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقۡنَٰهُمۡ يُنفِقُونَ ﴿٣﴾<br>
    وَٱلَّذِينَ يُؤۡمِنُونَ بِمَآ أُنزِلَ إِلَيۡكَ وَمَآ أُنزِلَ مِن قَبۡلِكَ وَبِٱلۡأٓخِرَةِ هُمۡ يُوقِنُونَ ﴿٤﴾<br>
    أُوْلَٰٓئِكَ عَلَىٰ هُدٗى مِّن رَّبِّهِمۡۖ وَأُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ ﴿٥﴾<br>
    إِنَّ ٱلَّذِينَ كَفَرُواْ سَوَآءٌ عَلَيۡهِمۡ ءَأَنذَرۡتَهُمۡ أَمۡ لَمۡ تُنذِرۡهُمۡ لَا يُؤۡمِنُونَ ﴿٦﴾<br>
    خَتَمَ ٱللَّهُ عَلَىٰ قُلُوبِهِمۡ وَعَلَىٰ سَمۡعِهِمۡۖ وَعَلَىٰٓ أَبۡصَٰرِهِمۡ غِشَٰوَةٞۖ وَلَهُمۡ عَذَابٌ عَظِيمٌ ﴿٧﴾
  `,
  "translation": `
    الم (1)<br>
    یہ وہ کتاب ہے جس میں کوئی شک نہیں، پرہیزگاروں کے لیے ہدایت ہے۔ (2)<br>
    جو غیب پر ایمان لاتے ہیں، نماز قائم کرتے ہیں، اور جو کچھ ہم نے انہیں دیا ہے اس میں سے خرچ کرتے ہیں۔ (3)<br>
    اور جو ایمان لاتے ہیں اس پر جو آپ پر نازل کیا گیا اور جو آپ سے پہلے نازل کیا گیا، اور آخرت پر یقین رکھتے ہیں۔ (4)<br>
    یہی لوگ اپنے رب کی طرف سے ہدایت پر ہیں، اور یہی فلاح پانے والے ہیں۔ (5)<br>
    یقیناً جو لوگ کافر ہیں، ان کے لیے برابر ہے کہ آپ انہیں خبردار کریں یا نہ کریں، وہ ایمان نہیں لائیں گے۔ (6)<br>
    اللہ نے ان کے دلوں اور کانوں پر مہر لگا دی ہے، اور ان کی آنکھوں پر پردہ ہے، اور ان کے لیے بڑا عذاب ہے۔ (7)
  `,
  "tafseer": `
    <h3>تفسیر:</h3>
    <p><strong>الم:</strong><br> یہ حروف مقطعات ہیں جن کی حقیقت اللہ ہی بہتر جانتا ہے۔ بعض مفسرین کے نزدیک یہ قرآن کے اعجاز کی طرف اشارہ ہے۔</p>

    <p><strong>ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِ:</strong><br>
    قرآن مجید شک و شبہ سے پاک ہے اور یہ صرف متقی لوگوں کے لیے ہدایت کا ذریعہ ہے۔</p>

    <p><strong>هُدٗى لِّلۡمُتَّقِينَ:</strong><br> تقویٰ والے لوگ ہی قرآن سے ہدایت حاصل کرتے ہیں۔</p>

    <p><strong>ٱلَّذِينَ يُؤۡمِنُونَ بِٱلۡغَيۡبِ:</strong><br> یعنی وہ ان دیکھی چیزوں جیسے اللہ، فرشتے، آخرت پر ایمان رکھتے ہیں۔</p>

    <p><strong>وَيُقِيمُونَ ٱلصَّلَوٰةَ:</strong><br> نماز کو وقت پر اور خشوع و خضوع سے ادا کرتے ہیں۔</p>

    <p><strong>وَمِمَّا رَزَقۡنَٰهُمۡ يُنفِقُونَ:</strong><br> اللہ کی عطا کردہ نعمتوں سے خرچ کرتے ہیں، جیسے زکوٰۃ، صدقات۔</p>

    <p><strong>وَٱلَّذِينَ يُؤۡمِنُونَ بِمَآ أُنزِلَ إِلَيۡكَ:</strong><br> قرآن پر اور پچھلی کتابوں پر ایمان رکھتے ہیں۔</p>

    <p><strong>وَبِٱلۡأٓخِرَةِ هُمۡ يُوقِنُونَ:</strong><br> آخرت کے دن پر پختہ یقین رکھتے ہیں۔</p>

    <p><strong>أُوْلَٰٓئِكَ عَلَىٰ هُدٗى مِّن رَّبِّهِمۡ:</strong><br> اللہ نے ان کو ہدایت دی ہے۔</p>

    <p><strong>وَأُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ:</strong><br> یہی لوگ دنیا و آخرت میں کامیاب ہوں گے۔</p>

    <p><strong>إِنَّ ٱلَّذِينَ كَفَرُواْ ...:</strong><br> کافروں کے دل سخت ہو چکے ہیں، چاہے آپ انہیں سمجھائیں یا نہ سمجھائیں، وہ ایمان نہیں لائیں گے۔</p>

    <p><strong>خَتَمَ ٱللَّهُ ...:</strong><br> اللہ نے ان کے دلوں اور کانوں پر مہر لگا دی ہے اور ان کی آنکھوں پر پردہ ہے، جس کے نتیجے میں وہ حق کو نہیں سن سکتے، نہ سمجھ سکتے، نہ دیکھ سکتے۔ ان کے لیے بڑا عذاب ہے۔</p>
  `,
  "bullets": `
    <h3>نکات:</h3>
    <ul style="line-height: 1.8;">
      <li>📖 قرآن ہدایت ہے ان لوگوں کے لیے جو تقویٰ اختیار کرتے ہیں۔</li>
      <li>🕋 تقویٰ والوں کی صفات: غیب پر ایمان، نماز، انفاق، ایمان بالکتب، یقین بالآخرت۔</li>
      <li>🌟 وہی لوگ کامیاب ہیں، اللہ کی ہدایت پر ہیں۔</li>
      <li>❌ کافر چاہے سمجھائے جائیں یا نہیں، ایمان نہیں لائیں گے۔</li>
      <li>🚫 ان کے دل، کان اور آنکھیں بند ہیں، اور ان کے لیے سخت عذاب ہے۔</li>
    </ul>
  `,
  "quizLink": "https://forms.gle/9va3Twzpbsp6pSnF6"
},
{
  "number": 2,
  "arabic": 
    "وَمِنَ ٱلنَّاسِ مَن يَقُولُ ءَامَنَّا بِٱللَّهِ وَبِٱلۡيَوۡمِ ٱلۡآخِرِ وَمَا هُم بِمُؤۡمِنِينَ ﴿٨﴾<br>\
    يُخَادِعُونَ ٱللَّهَ وَٱلَّذِينَ ءَامَنُواْ وَمَا يَخْدَعُونَ إِلَّآ أَنفُسَهُمۡ وَمَا يَشۡعُرُونَ ﴿٩﴾<br>\
    فِي قُلُوبِهِم مَّرَضٞ فَزَادَهُمُ ٱللَّهُ مَرَضٗا وَلَهُم عَذَابٌ أَلِيمٌۢ بِمَا كَانُواْ يَكۡذِبُونَ ﴿١٠﴾<br>\
    وَإِذَا قِيلَ لَهُمْ لَا تُفۡسِدُواْ فِي ٱلۡأَرۡضِ قَالُوٓاْ إِنَّمَا نَحۡنُ مُصۡلِحُونَ ﴿١١﴾<br>\
    أَلَآ إِنَّهُمْ هُمُ ٱلۡمُفۡسِدُونَ وَلَٰكِن لَّا يَشۡعُرُونَ ﴿١٢﴾<br>\
    وَإِذَا قِيلَ لَهُمْ ءَامِنُواْ كَمَآ آمَنَ ٱلنَّاسُ قَالُواْ أَنُؤۡمِنُ كَمَآ آمَنَ ٱلسُّفَهَآءُۗ أَلَآ إِنَّهُمْ هُمُ ٱلسُّفَهَآءُ وَلَٰكِن لَّا يَعۡلَمُونَ ﴿١٣﴾<br>\
    وَإِذَا لَقُواْ ٱلَّذِينَ ءَامَنُواْ قَالُوٓاْ ءَامَنَّا وَإِذَا خَلَوْاْ إِلَىٰ شَيَٰطِينِهِمۡ قَالُوٓاْ إِنَّا مَعَكُمۡ إِنَّمَا نَحۡنُ مُسۡتَهۡزِءُونَ ﴿١٤﴾<br>\
    ٱللَّهُ يَسۡتَهۡزِئُ بِهِمۡ وَيَمُدُّهُمۡ فِي طُغۡيَٰنِهِمۡ يَعۡمَهُونَ ﴿١٥﴾<br>\
    أُوْلَٰٓئِكَ ٱلَّذِينَ ٱشۡتَرَوُاْ ٱلضَّلَٰلَةَ بِٱلۡهُدَىٰ فَمَا رَبِحَت تِّجَٰرَتَهُمۡ وَمَا كَانُواْ مُهۡتَدِينَ ﴿١٦﴾<br>\
    مَثَلُهُمۡ كَمَثَلِ ٱلَّذِي ٱسۡتَوۡقَدَ نَارٗا فَلَمَّآ أَضَآءَت مَا حَوۡلَهُۥ ذَهَبَ ٱللَّهُ بِنُورِهِمۡ وَتَرَكَهُمۡ فِي ظُلُمَٰتٍۢ لَّا يُبۡصِرُونَ ﴿١٧﴾<br>\
    صُمٌّۢ بُكۡمٌ عُمۡيٌ فَهُمۡ لَا يَرۡجِعُونَ ﴿١٨﴾<br>\
    أَوْ كَصَيِّبٖ مِّنَ ٱلسَّمَآءِ فِيهِ ظُلُمَٰتٞ وَرَعْدٌۭ وَبَرْقٌۭ يَجۡعَلُونَ أَصَٰبِعَهُمۡ فِيٓ ءَاذَانِهِم مِّنَ ٱلصَّوَاعِقِ حَذَرَ ٱلۡمَوۡتِۚ وَٱللَّهُ مُحِيطٞ بِٱلۡك̧لِّۢ ﴿١٩﴾<br>\
    يَكَادُ ٱلۡبَرْقُ يَخۡطَفُ أَبۡصَٰرَهُمۡ كُلَّمَآ أَضَآءَ لَهُمۡ مَّشَوۡا۟ فِيهِ وَإِذَآ أَظۡلَمَ عَلَيهِمۡ قَامُوا۟ وَلَوۡ شَآءَ ٱللَّهُ لَذَهَبَ بِسَمۡعِهِمۡ وَأَبۡصَٰرِهِمۡۚ إِنَّ ٱللَّهَ عَلَىٰ كُلِّ شَيْءٍۢ قَدِيرٌ ﴿٢٠﴾",
  "translation": 
    "اور لوگوں میں بعض ایسے بھی ہیں جو کہتے ہیں کہ ہم اللہ پر اور قیامت کے دن پر ایمان لے آئے، حالانکہ وہ ایمان والے نہیں ہیں۔ (8)<br>\
    یہ لوگ اللہ اور مؤمنوں کو دھوکہ دیتے ہیں، مگر درحقیقت وہ خود کو دھوکہ دے رہے ہیں اور انہیں اس کا احساس نہیں۔ (9)<br>\
    ان کے دلوں میں بیماری ہے، اللہ نے ان کی بیماری کو بڑھا دیا ہے، اور ان کے لیے دردناک عذاب ہے، کیونکہ وہ جھوٹ بولتے تھے۔ (10)<br>\
    اور جب ان سے کہا جاتا ہے کہ زمین میں فساد نہ پھیلاؤ، تو کہتے ہیں کہ ہم تو اصلاح کرنے والے ہیں۔ (11)<br>\
    خبردار! وہی لوگ فساد پھیلانے والے ہیں، مگر انہیں معلوم نہیں ہوتا۔ (12)<br>\
    اور جب ان سے کہا جاتا ہے کہ تم بھی ویسے ایمان لے آؤ جیسا لوگ ایمان لائے ہیں، تو کہتے ہیں کہ کیا ہم احمقوں کی طرح ایمان لائیں؟ خبردار! وہی لوگ احمق ہیں، مگر انہیں علم نہیں۔ (13)<br>\
    اور جب وہ مؤمنوں سے ملتے ہیں تو کہتے ہیں کہ ہم ایمان لے آئے، اور جب اپنے شیطانوں کے پاس اکیلے ہوتے ہیں تو کہتے ہیں کہ ہم تمہارے ساتھ ہیں، ہم تو صرف تمہاری تمسخر اڑانے والے ہیں۔ (14)<br>\
    اللہ بھی ان کا تمسخر اڑاتا ہے اور انہیں ان کی سرکشی میں گمراہ کر دیتا ہے۔ (15)<br>\
    یہ وہ لوگ ہیں جنہوں نے ہدایت کے بدلے گمراہی خرید لی، تو ان کا کاروبار کبھی کامیاب نہ ہوگا اور نہ ہی وہ ہدایت یافتہ ہیں۔ (16)<br>\
    ان کی مثال اس شخص کی ہے جس نے آگ جلا دی، پھر جب اس نے اپنے گرد روشنی کی تو اللہ نے ان کی روشنی چھین لی اور انہیں ایسی تاریکی میں چھوڑ دیا کہ وہ کچھ نہیں دیکھ سکتے۔ (17)<br>\
    یہ بہرے، گونگے اور اندھے ہیں، پس یہ پلٹ کر نہیں آ سکتے۔ (18)<br>\
    یا اس بارش کی مانند ہیں جو آسمان سے برستی ہے جس میں تاریکی، گرج اور بجلی ہے، وہ اپنی انگلیاں کانوں میں گھونپ لیتے ہیں تاکہ موت کے خوف سے بچ سکیں، حالانکہ اللہ سب چیزوں کو گھیرے ہوئے ہے۔ (19)<br>\
    بجلی ان کی آنکھوں کو چھیننے والی ہے، جب کبھی روشنی ہوتی ہے وہ اس میں چلتے ہیں اور جب اندھیرا ہوتا ہے تو کھڑے ہو جاتے ہیں، اگر اللہ چاہے تو ان کے کان اور آنکھیں چھین لے، بے شک اللہ ہر چیز پر قادر ہے۔ (20)",
  "tafseer": 
    "<h3>تفسیر:</h3>\
    <p><strong>آیات 8-10:</strong> یہاں کفارِ مخلص (منافقین) کا ذکر ہے جو زبان سے ایمان کا دعویٰ کرتے ہیں مگر دل میں کفر رکھتے ہیں۔ یہ اللہ اور مومنین کو دھوکہ دیتے ہیں، مگر حقیقت میں خود کو دھوکہ دے رہے ہوتے ہیں۔ ان کے دلوں میں بیماری ہے یعنی کفر اور ریاکاری، اور یہ بیماری بڑھتی رہتی ہے۔</p>\
    <p><strong>آیات 11-13:</strong> یہ لوگ زمین میں فساد پھیلانے والے ہیں مگر کہتے ہیں کہ ہم اصلاح کرنے والے ہیں۔ جب انہیں کہا جاتا ہے کہ تم بھی ایمان لے آؤ تو وہ تمسخر اُڑاتے ہیں اور اپنے آپ کو عقل سے محروم ظاہر کرتے ہیں۔</p>\
    <p><strong>آیات 14-16:</strong> منافقین جب مؤمنوں سے ملتے ہیں تو ایمان کا اظہار کرتے ہیں، اور جب اپنے گروہ میں ہوتے ہیں تو تمسخر اڑاتے ہیں۔ اللہ بھی ان کا تمسخر اڑاتا ہے اور انہیں ان کے طغیان میں ڈوبا دیتا ہے۔ انہوں نے ہدایت کے بدلے گمراہی خریدی، اس لیے ان کا سودا ہار جاتا ہے۔</p>\
    <p><strong>آیات 17-18:</strong> ان کی مثال ایسی ہے جیسے آگ جلا کر روشنی حاصل کی ہو، پھر اللہ نے وہ روشنی چھین لی اور انہیں ایسی تاریکی میں چھوڑ دیا کہ وہ کچھ نہیں دیکھ سکتے۔ یہ بہرے، گونگے اور اندھے ہیں جو کبھی نہیں پلٹ سکتے۔</p>\
    <p><strong>آیات 19-20:</strong> یہ بارش، گرج اور بجلی کی مثال ہیں، جو موت کے خوف سے اپنی انگلیاں کانوں میں رکھتے ہیں۔ اللہ انہیں گھیرے ہوئے ہے۔ بجلی ان کی آنکھوں کو چھین لیتی ہے، وہ روشنی میں چلتے ہیں اور اندھیرے میں کھڑے ہو جاتے ہیں۔ اگر اللہ چاہے تو ان کے کان اور آنکھیں چھین سکتا ہے۔ اللہ ہر چیز پر قادر ہے۔</p>",
  "bullets": 
    "<h3>نکات:</h3>\
    <ul style='line-height: 1.8;'>\
      <li>🗣️ منافق وہ لوگ ہیں جو زبان سے ایمان کا دعویٰ کرتے ہیں مگر دل میں کافر ہوتے ہیں۔</li>\
      <li>🧠 ان کے دلوں میں بیماری ہے جو اللہ بڑھاتا ہے، اور ان کے لیے دردناک عذاب ہے۔</li>\
      <li>🌍 یہ زمین میں فساد پھیلانے والے ہیں مگر کہتے ہیں ہم اصلاح کر رہے ہیں۔</li>\
      <li>🤥 منافقین مؤمنوں سے ملتے ہیں تو ایمان کا اظہار کرتے ہیں، اور جب اکیلے ہوتے ہیں تو تمسخر اڑاتے ہیں۔</li>\
      <li>🔥 ان کی مثال ایسی ہے جیسے روشنی کی آگ جلا کر اللہ نے ان کی روشنی چھین لی ہو۔</li>\
      <li>⚡ یہ بارش، گرج، بجلی کی مانند ہیں، موت کے خوف سے کانوں میں انگلیاں ڈالتے ہیں۔</li>\
      <li>💡 اللہ ہر چیز پر قادر ہے، چاہے وہ ان کے کان اور آنکھیں چھین لے۔</li>\
    </ul>",
  "quizLink": "https://forms.gle/5Kxdbd4ezzqdFn618"
}
,
{
  "number": 3,
  "arabic": `
    يَـٰٓأَيُّهَا ٱلنَّاسُ ٱعۡبُدُواْ رَبَّكُمُ ٱلَّذِي خَلَقَكُمۡ وَٱلَّذِينَ مِن قَبۡلِكُمۡ لَعَلَّكُمۡ تَتَّقُونَ ﴿٢١﴾<br>
    ٱلَّذِي جَعَلَ لَكُمُ ٱلۡأَرۡضَ فِرَٰشٗا وَٱلسَّمَآءَ بِنَآءٗ وَأَنزَلَ مِنَ ٱلسَّمَآءِ مَآءٗ فَأَخۡرَجَ بِهِۦ مِنَ ٱلثَّمَرَٰتِ رِزۡقٗا لَّكُمۡۖ فَلَا تَجۡعَلُواْ لِلَّهِ أَندَادٗا وَأَنتُمۡ تَعۡلَمُونَ ﴿٢٢﴾<br>
    وَإِن كُنتُمۡ فِي رَيۡبٖ مِّمَّا نَزَّلۡنَا عَلَىٰ عَبۡدِنَا فَأۡتُواْ بِسُورَةٖ مِّن مِّثۡلِهِۦ وَٱدۡعُواْ شُهَدَآءَكُم مِّن دُونِ ٱللَّهِ إِن كُنتُمۡ صَٰدِقِينَ ﴿٢٣﴾<br>
    فَإِن لَّمۡ تَفۡعَلُواْ وَلَن تَفۡعَلُواْ فَٱتَّقُواْ ٱلنَّارَ ٱلَّتِي وَقُودُهَا ٱلنَّاسُ وَٱلۡحِجَارَةُۖ أُعِدَّتۡ لِلۡكَٰفِرِينَ ﴿٢٤﴾<br>
    وَبَشِّرِ ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّـٰلِحَٰتِ أَنَّ لَهُمۡ جَنَّـٰتٖ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُۖ كُلَّمَا رُزِقُواْ مِنۡهَا مِن ثَمَرَةٖ رِّزۡقٗا قَالُواْ هَٰذَا ٱلَّذِي رُزِقۡنَا مِن قَبۡلُۖ وَأُتُواْ بِهِۦ مُتَشَٰبِهٗاۖ وَلَهُمۡ فِيهَآ أَزۡوَٰجٞ مُّطَهَّرَةٞۖ وَهُمۡ فِيهَا خَٰلِدُونَ ﴿٢٥﴾<br>
    إِنَّ ٱللَّهَ لَا يَسۡتَحۡيِۦٓ أَن يَضۡرِبَ مَثَلٗا مَّا بَعُوضَةٗ فَمَا فَوۡقَهَاۚ فَأَمَّا ٱلَّذِينَ ءَامَنُواْ فَيَعۡلَمُونَ أَنَّهُ ٱلۡحَقُّ مِن رَّبِّهِمۡۖ وَأَمَّا ٱلَّذِينَ كَفَرُواْ فَيَقُولُونَ مَاذَآ أَرَادَ ٱللَّهُ بِهَٰذَا مَثَلٗاۘ يُضِلُّ بِهِۦ كَثِيرٗا وَيَهۡدِي بِهِۦ كَثِيرٗاۘ وَمَا يُضِلُّ بِهِۦٓ إِلَّا ٱلۡفَٰسِقِينَ ﴿٢٦﴾<br>
    ٱلَّذِينَ يَنقُضُونَ عَهۡدَ ٱللَّهِ مِنۢ بَعۡدِ مِيثَٰقِهِۦ وَيَقۡطَعُونَ مَآ أَمَرَ ٱللَّهُ بِهِۦٓ أَن يُوصَلَ وَيُفۡسِدُونَ فِي ٱلۡأَرۡضِۚ أُوْلَـٰٓئِكَ هُمُ ٱلۡخَٰسِرُونَ ﴿٢٧﴾<br>
    كَيۡفَ تَكۡفُرُونَ بِٱللَّهِ وَكُنتُمۡ أَمۡوَٰتٗا فَأَحۡيَٰكُمۡۖ ثُمَّ يُمِيتُكُمۡ ثُمَّ يُحۡيِيكُمۡ ثُمَّ إِلَيۡهِ تُرۡجَعُونَ ﴿٢٨﴾<br>
    هُوَ ٱلَّذِي خَلَقَ لَكُم مَّا فِي ٱلۡأَرۡضِ جَمِيعٗا ثُمَّ ٱسۡتَوَىٰٓ إِلَى ٱلسَّمَآءِ فَسَوَّىٰهُنَّ سَبۡعَ سَمَٰوَٰتٖۚ وَهُوَ بِكُلِّ شَيۡءٍ عَلِيمُۢ ﴿٢٩﴾
  `,
  "translation": `
    اے لوگو! اپنے رب کی عبادت کرو جس نے تمہیں اور تم سے پہلے لوگوں کو پیدا کیا، تاکہ تم پرہیزگار بنو (۲۱)<br>
    جس نے تمہارے لیے زمین کو بچھونا اور آسمان کو چھت بنایا، اور آسمان سے پانی برسا کر تمہارے لیے پھل پیدا کیے، پس اللہ کے ساتھ کسی کو شریک نہ ٹھہراؤ جبکہ تم جانتے ہو (۲۲)<br>
    اگر تمہیں اس کتاب کے بارے میں کوئی شک ہو جو ہم نے اپنے بندے پر نازل کی ہے تو تم بھی اس جیسی ایک سورت بنا لاؤ، اور اللہ کے سوا اپنے تمام مددگاروں کو بھی بلا لو اگر تم سچے ہو (۲۳)<br>
    اگر تم ایسا نہ کرسکو (اور یقیناً نہیں کرسکتے) تو اس آگ سے ڈرو جس کا ایندھن انسان اور پتھر ہوں گے، جو کافروں کے لیے تیار کی گئی ہے (۲۴)<br>
    جو لوگ ایمان لائے اور نیک عمل کرتے رہے، انہیں خوشخبری سنا دو کہ ان کے لیے ایسے باغ ہیں جن کے نیچے نہریں بہتی ہوں گی (۲۵)<br>
    اللہ کسی چیز کی مثال دینے سے نہیں شرماتا، خواہ وہ مچھر ہو یا اس سے بڑی کوئی چیز (۲۶)<br>
    جو لوگ اللہ کے عہد کو مضبوطی سے باندھنے کے بعد توڑ دیتے ہیں، اور جن چیزوں کو جوڑنے کا اللہ نے حکم دیا ہے انہیں کاٹ دیتے ہیں، اور زمین میں فساد پھیلاتے ہیں، یہی لوگ نقصان اٹھانے والے ہیں (۲۷)<br>
    تم اللہ کا انکار کیسے کرتے ہو حالانکہ تم مردہ تھے تو اس نے تمہیں زندگی بخشی، پھر وہ تمہیں موت دے گا، پھر تمہیں دوبارہ زندہ کرے گا، پھر اسی کی طرف تم لوٹائے جاؤ گے (۲۸)<br>
    وہی تو ہے جس نے زمین کی ہر چیز تمہارے لیے پیدا کی، پھر آسمان کی طرف متوجہ ہوا اور انہیں سات آسمان بنا دیا، اور وہ ہر چیز کا علم رکھتا ہے (۲۹)
  `,
  "tafseer": `
    <h3>تفسیر:</h3>
    
    <p><strong>یٰۤاَیُّہَا النَّاسُ:</strong><br>
    اللہ تعالیٰ تمام انسانوں کو مخاطب کرتے ہوئے فرماتا ہے کہ صرف اسی کی عبادت کرو جو تمہارا حقیقی رب ہے۔</p>
    
    <p><strong>اِعۡبُدُوۡا رَبَّکُمُ:</strong><br>
    عبادت کا مطلب محض نماز روزہ نہیں، بلکہ زندگی کے ہر شعبے میں اللہ کی اطاعت اور اس کے احکام کی پیروی ہے۔</p>
    
    <p><strong>الَّذِیۡ جَعَلَ لَکُمُ الۡاَرۡضَ فِرَاشًا:</strong><br>
    زمین کو فرش بنانے سے مراد ہے کہ اسے تمہارے رہنے کے قابل بنایا، نرم اور ہموار کیا۔</p>
    
    <p><strong>فَلَا تَجۡعَلُوۡا لِلّٰہِ اَنۡدَادًا:</strong><br>
    اللہ کے ساتھ کسی کو شریک نہ ٹھہراؤ، حالانکہ تم جانتے ہو کہ وہی حقیقی معبود ہے۔</p>
    
    <p><strong>وَ اِنۡ کُنۡتُمۡ فِیۡ رَیۡبٍ:</strong><br>
    قرآن کی حقانیت پر اگر شک ہے تو اس جیسی ایک سورت بنا کر دکھاؤ، جو نہیں کرسکتے۔</p>
    
    <p><strong>فَاتَّقُوا النَّارَ:</strong><br>
    جہنم کا ایندھن انسان اور پتھر ہوں گے، جو کافروں کے لیے تیار کی گئی ہے۔</p>
    
    <p><strong>وَ بَشِّرِ الَّذِیۡنَ اٰمَنُوۡا:</strong><br>
    مومنین کے لیے جنت کی بشارت ہے جہاں پاکیزہ بیویاں اور ہمیشہ رہنے کی نعمتیں ہوں گی۔</p>
    
    <p><strong>اِنَّ اللّٰہَ لَا یَسۡتَحۡیٖۤ اَنۡ یَّضۡرِبَ مَثَلًا:</strong><br>
    اللہ حق بات کہنے سے نہیں شرماتا، خواہ مثال کے لیے مچھر جیسی حقیر چیز ہی کیوں نہ ہو۔</p>
    
    <p><strong>الَّذِیۡنَ یَنۡقُضُوۡنَ عَہۡدَ اللّٰہِ:</strong><br>
    جو اللہ کے عہد کو توڑتے ہیں، رشتے قطع کرتے ہیں اور زمین میں فساد پھیلاتے ہیں، وہی نقصان اٹھانے والے ہیں۔</p>
    
    <p><strong>کَیۡفَ تَکۡفُرُوۡنَ بِاللّٰہِ:</strong><br>
    تم کیسے اللہ کا انکار کرتے ہو جبکہ تم مردہ تھے تو اس نے تمہیں زندگی بخشی۔</p>
    
    <p><strong>ہُوَ الَّذِیۡ خَلَقَ لَکُمۡ مَّا فِی الۡاَرۡضِ جَمِیۡعًا:</strong><br>
    زمین کی تمام نعمتیں تمہارے لیے پیدا کی گئی ہیں، پھر اللہ نے سات آسمان بنائے، اور وہ ہر چیز کا علم رکھتا ہے۔</p>
  `,
  "bullets": `
    <h3>اہم نکات:</h3>
    <ul style="line-height: 1.8;">
      <li>🕌 اللہ تعالیٰ تمام انسانوں کو صرف اپنی عبادت کا حکم دیتا ہے</li>
      <li>🌍 زمین اور آسمان کی تخلیق اللہ کی قدرت کی نشانیاں ہیں</li>
      <li>📖 قرآن کا مقابلہ کرنے سے کسی انسان کے بس کی بات نہیں</li>
      <li>🔥 جہنم کا ایندھن انسان اور پتھر ہوں گے</li>
      <li>🌴 مومنین کے لیے جنت کی بشارت ہے</li>
      <li>🦟 اللہ حق بات کہنے سے نہیں شرماتا، چاہے مثال مچھر ہی کیوں نہ ہو</li>
      <li>⚖ عہد شکنی اور رشتے توڑنا فسق ہے</li>
      <li>💀 زندگی اور موت صرف اللہ کے اختیار میں ہے</li>
      <li>🌌 سات آسمانوں کی تخلیق اللہ کی عظیم قدرت ہے</li>
    </ul>
  `,
  "quizLink": "https://forms.gle/eAKMJMXMiziLBL9JA"
}

      ]
    }
  ];

  // DOM Elements
  const surahSelectionPage = document.getElementById("surahSelectionPage");
  const surahDetailsPage = document.getElementById("surahDetailsPage");
  const backButton = document.getElementById("backButton");
  const surahTitle = document.getElementById("surahTitle");
  const searchInput = document.getElementById("surahSearch");
  const searchResults = document.getElementById("searchResults");
  const surahList = document.getElementById("surahList");
  const taarufContent = document.getElementById("taarufContent");
  const ayahContent = document.getElementById("ayahContent");
  
  // Content page elements
  const sections = document.querySelectorAll(".section");
  const buttons = document.querySelectorAll(".top-menu button");
  const rukooSelect = document.getElementById("rukooSelect");
  const showArabic = document.getElementById("showArabic");
  const showTranslation = document.getElementById("showTranslation");
  const showTafseer = document.getElementById("showTafseer");
  const showBullets = document.getElementById("showBullets");

  // Initially populate surah list
  function populateSurahList(surahs = surahData) {
    surahList.innerHTML = '';
    surahs.forEach(surah => {
      const card = document.createElement('div');
      card.className = 'surah-card';
      card.dataset.number = surah.number;
      card.innerHTML = `
        <div class="surah-number">${surah.number}</div>
        <div class="surah-name">
          <span class="urdu-name">${surah.urduName}</span>
          <span class="english-name">${surah.englishName}</span>
        </div>
      `;
      card.addEventListener('click', () => showSurahDetails(surah));
      surahList.appendChild(card);
    });
  }

  // Show surah details
  function showSurahDetails(surah) {
    surahTitle.textContent = `سورۃ ${surah.urduName}`;
    taarufContent.innerHTML = surah.taaruf;
    
    // Populate rukoo select
    rukooSelect.innerHTML = '';
    surah.rukoos.forEach(rukoo => {
      const option = document.createElement('option');
      option.value = rukoo.number;
      option.textContent = `رکوع ${rukoo.number}`;
      rukooSelect.appendChild(option);
    });
    
    // Load first rukoo by default
    loadRukooContent(surah.rukoos[0]);
    
    // Switch pages
    surahSelectionPage.style.display = "none";
    surahDetailsPage.style.display = "block";
    window.scrollTo(0, 0);
  }

  // Load rukoo content
  function loadRukooContent(rukoo) {
    ayahContent.innerHTML = `
      <div class="arabic section-block">
        <h3>عربی متن</h3>
        <p>${rukoo.arabic}</p>
      </div>
      <div class="translation section-block">
        <h3>اردو ترجمہ</h3>
        <p>${rukoo.translation}</p>
      </div>
      <div class="tafseer section-block">
        ${rukoo.tafseer}
      </div>
      <div class="bullets section-block">
        ${rukoo.bullets}
        ${rukoo.quizLink ? `<a href="${rukoo.quizLink}" target="_blank" class="quiz-button">کوئز حل کریں</a>` : ''}
      </div>
    `;
    updateVisibility();
  }

  // Update visibility of sections
  function updateVisibility() {
    document.querySelectorAll(".arabic").forEach(el => 
      el.style.display = showArabic.checked ? "block" : "none");
    document.querySelectorAll(".translation").forEach(el => 
      el.style.display = showTranslation.checked ? "block" : "none");
    document.querySelectorAll(".tafseer").forEach(el => 
      el.style.display = showTafseer.checked ? "block" : "none");
    document.querySelectorAll(".bullets").forEach(el => 
      el.style.display = showBullets.checked ? "block" : "none");
  }

  // Handle search
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    searchResults.innerHTML = '';
    
    if (query.length < 1) {
      searchResults.style.display = 'none';
      populateSurahList([]); // Clear the list when search is empty
      return;
    }
    
    const results = surahData.filter(surah => 
      surah.urduName.toLowerCase().includes(query) || 
      surah.englishName.toLowerCase().includes(query));
    
    if (results.length > 0) {
      results.forEach(surah => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.innerHTML = `
          <span class="urdu-name">${surah.urduName}</span>
          <span class="english-name">${surah.englishName}</span>
        `;
        item.addEventListener('click', () => {
          showSurahDetails(surah);
          searchInput.value = '';
          searchResults.style.display = 'none';
        });
        searchResults.appendChild(item);
      });
      searchResults.style.display = 'block';
      populateSurahList(results); // Update the grid with search results
    } else {
      searchResults.style.display = 'none';
      populateSurahList([]); // Clear the list when no results
    }
  });

  // Close search results when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });

  // Back button functionality
  backButton.addEventListener('click', () => {
    surahDetailsPage.style.display = "none";
    surahSelectionPage.style.display = "block";
    window.scrollTo(0, 0);
  });

  // Handle section buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(button.dataset.section).classList.add('active');
    
    // Add this new part to load content for the new sections:
    const currentSurah = surahData.find(s => s.urduName === surahTitle.textContent.replace('سورۃ ', ''));
    if (currentSurah) {
      if (button.dataset.section === 'aadaad') {
        document.getElementById('aadaadContent').innerHTML = currentSurah.aadaad;
      } else if (button.dataset.section === 'maujzaat') {
        document.getElementById('maujzaatContent').innerHTML = currentSurah.maujzaat;
      }
    }
  });
});

  // Handle rukoo select change
  rukooSelect.addEventListener('change', (e) => {
    const currentSurah = surahData.find(s => s.urduName === surahTitle.textContent.replace('سورۃ ', ''));
    if (currentSurah) {
      const selectedRukoo = currentSurah.rukoos.find(r => r.number == e.target.value);
      if (selectedRukoo) loadRukooContent(selectedRukoo);
    }
  });

  // Handle checkbox changes
  [showArabic, showTranslation, showTafseer, showBullets].forEach(checkbox => {
    checkbox.addEventListener('change', updateVisibility);
  });

  // Initialize
  populateSurahList([]); // Start with empty list until search
});