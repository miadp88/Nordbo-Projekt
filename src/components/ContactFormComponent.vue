<template>
    <section class="contactForm d-flex justify-content-center">
        <div class="contactWrapper d-flex justify-content-center">
            <form action="/action_page.php">
                <h2>Contact us</h2>
                <input type="text" id="fname" name="Name" placeholder="Your Name">
                <input type="text" id="email" name="email" placeholder="Your email">
                <input type="text" id="lname" name="lastname" placeholder="Your company name">
                <label for="subject">Write a note for us, and we will</label>
                <label for="subject">come back to you</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
                <div class="submit-button-wrapper"></div>
                    <input class="submitbtn" type="submit" value="Send">
    </form>
</div>
    </section>
</template>