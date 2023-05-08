$(() => {
    $('#signup-button').on('click', (e) => {
        $('body').append(`
          <div class="overlay">
           <div id="close">[X Close]</div>
            <div class="modal">
                <h3>Sign up</h3>
                <form method="post" action="">
                   <input type="text" name="name" placeholder="Name" required>
                   <input type="email" name="email" placeholder="E-mail" required>
                   <input type="password" name="password" placeholder="Password" required>
                   <input type="password" name="confirm-password" placeholder="Confirm Password" required>
                   <input type="submit" value="Sign up">
                   <p>Already have an account? <a href="#" id="signin">Sign in</a></p>
                </form>
            </div>
          </div>
        `).show()

        $('#signin').on('click', (e) => {
            $('.modal').remove()
            $('.overlay').append(`
            <div class="modal">
            <h3>Sign in</h3>
            <form method="post" action="">
                <input type="email" name="email" placeholder="E-mail" required>
                <input type="password" name="password" placeholder="Password" required>
                <input type="submit" value="Sign up">
             </form>
             </div>
            `)
            $('.modal').css({
                'height' : '400px',
                'width' : '450px',
                'padding-top' : '25px'
            })
        })

        $('#close').on('click', (e) => {
            e.preventDefault()
            $('.overlay').remove()
        })

    })



})