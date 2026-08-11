// ========================================
// BLOG MANAGEMENT SYSTEM
// DAY 4 - JAVASCRIPT
// ========================================

const blogForm = document.getElementById("blogForm");

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const contentInput = document.getElementById("content");


// Form Submit Event
blogForm.addEventListener("submit", function (event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get values from inputs
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const content = contentInput.value.trim();


    // Validate Blog Title
    if (title.length < 5) {
        alert("⚠️ Blog title must contain at least 5 characters.");
        titleInput.focus();
        return;
    }


    // Validate Author
    if (author.length < 2) {
        alert("⚠️ Please enter a valid author name.");
        authorInput.focus();
        return;
    }


    // Validate Content
    if (content.length < 20) {
        alert("⚠️ Blog content must contain at least 20 characters.");
        contentInput.focus();
        return;
    }


    // If validation passes
    alert("✅ Blog validated successfully!");

    console.log("Blog Title:", title);
    console.log("Author:", author);
    console.log("Content:", content);

    // Clear the form
    blogForm.reset();

});