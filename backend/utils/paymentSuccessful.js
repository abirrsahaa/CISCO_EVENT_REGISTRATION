exports.paymentSuccessEmail = (
  name,
  level,
  phone,
  university,
  event,
  event1,
  event2,
  registration,

  amount,
  orderId,
  paymentId
) => {
  return `<!DOCTYPE html>
      <html>
      
      <head>
          <meta charset="UTF-8">
          <title>Payment Confirmation</title>
          <style>
              body {
                  background-color: #ffffff;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 1.4;
                  color: #333333;
                  margin: 0;
                  padding: 0;
              }
      
      
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  text-align: center;
              }
      
              .logo {
                  max-width: 200px;
                  margin-bottom: 20px;
              }
      
              .message {
                  font-size: 18px;
                  font-weight: bold;
                  margin-bottom: 20px;
              }
      
              .body {
                  font-size: 16px;
                  margin-bottom: 20px;
              }
      
              .cta {
                  display: inline-block;
                  padding: 10px 20px;
                  background-color: #FFD60A;
                  color: #000000;
                  text-decoration: none;
                  border-radius: 5px;
                  font-size: 16px;
                  font-weight: bold;
                  margin-top: 20px;
              }
      
              .support {
                  font-size: 14px;
                  color: #999999;
                  margin-top: 20px;
              }
      
              .highlight {
                  font-weight: bold;
              }
          </style>
      
      </head>
      
      <body>
          <div class="container">
              <div class="message">Course Payment Confirmation</div>
              <div class="body">
                  <p>Dear ${name},</p>
                  <p>Registration:${registration}</P>
                  <p>We have received a payment of <span class='highlight'>₹${amount}</span></p>.
                  <p>Your Payment ID is <b>${paymentId}</b></p>
                  <p>Your Order ID is <b>${orderId}</b></p>
                  <p>you have successfully registered for the following events:</p>
                  <p>Level: ${level}</p>
                    <p>Event1: ${event}</p>
                    <p>Event2: ${event1}</p>
                    <p>Event3: ${event2}</p>

                    <p>For starter you are only eligible for tech talks </p>
                 
              </div>
              <div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a
                      href="mailto:ciscoXlpuigen.com">ciscoxlpuigen.com</a>. We are here to help!</div>
          </div>
      </body>
      
      </html>`;
};
