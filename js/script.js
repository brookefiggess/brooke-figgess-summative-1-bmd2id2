function goToHome() {
    window.location.href = "homepage.html";
  }

// Form functions - journalform.html

  function nextSlide() {
    const slides = document.querySelectorAll('.journal-slide');
    let activeIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));
    if (activeIndex < slides.length - 1) {
      slides[activeIndex].classList.remove('active');
      slides[activeIndex + 1].classList.add('active');
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".journal-slider");
  
    function updateSliderBackground(value) {
      slider.style.background = `linear-gradient(to right, #EEFF00 0%, #EEFF00 ${value}%, #444 ${value}%, #444 100%)`;
    }
  
    updateSliderBackground(slider.value);
  
    slider.addEventListener("input", function () {
      updateSliderBackground(this.value);
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const spendOptions = document.querySelectorAll(".spend-option");
  
    spendOptions.forEach(button => {
      button.addEventListener("click", () => {
        spendOptions.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
      });
    });
  });

 // Supabase defer - journalform.html

let supabase;

window.addEventListener('DOMContentLoaded', () => {
  const SUPABASE_URL = 'https://kmbrcuqkkcwawkqvamqc.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // (trimmed for clarity)
  supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
});

async function submitJournalEntry() {
  const moodScore = document.querySelector('.journal-slider').value;
  const spendingChoice = document.querySelector('.spend-option.selected')?.innerText.trim() || '';
  const purchaseNotes = document.querySelector('.journal-textarea').value.trim();

  const { data, error } = await supabase
    .from('journal_entries')
    .insert([
      {
        mood_score: parseInt(moodScore),
        spending_choice: spendingChoice,
        purchase_notes: purchaseNotes
      }
    ]);

  if (error) {
    console.error('Error inserting data:', error);
    alert('Something went wrong!');
  } else {
    alert('Entry submitted!');
    window.location.href = 'journalprompt.html'; // ✅ redirect to journal prompt page
  }
}

function selectSpendingOption(button) {
  document.querySelectorAll('.spend-option').forEach(btn => btn.classList.remove('selected'));
  button.classList.add('selected');
}

  