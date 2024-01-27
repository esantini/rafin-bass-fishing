const inlineCSS = require('inline-css');
const mailgun = require('mailgun-js')({
  domain: 'mg.rafinbassfishing.com.mx',
  apiKey: process.env.MAILGUN_KEY,
});

const getTemplate = ({ name, phone, email, message, subject, when, days }) => `
<div>
  <style>
    h2 { color: #256cb2; }
    strong { color: #1a4d80; }
    img.logo { width: 120px }
  </style>
  Hola Rafin! <br /> <br />
  <h2>${subject} from: ${name} </h2>
  ${phone ? `<strong>Phone:</strong> ${phone} <br />` : ''}
  ${email ? `<strong>Email:</strong> ${email} <br />` : ''}
  ${subject === "Booking" ? `
    <strong>When?</strong> ${when} <br />
    <strong>How Long?</strong> ${days} day(s) <br />`
    : ''}
  <br />
  <strong>Message:</strong>
  <p>${message.replace(/(?:\r\n|\r|\n)/g, '<br />')}</p>
  <br />
  <img class="logo" src="https://rafinbassfishing.com.mx/l_rafin_bk.png" />
</div>
`;

const getMessage = async (msgProps) => {
  const html = await inlineCSS(getTemplate(msgProps), { url: 'fake' });

  return {
    from: 'Rafin Bass Fishing <no-reply@rafinbassfishing.com.mx>',
    to: process.env.NEXT_PUBLIC_DEV ? 'esantinie@gmail.com' : 'esantinie@gmail.com, raosga@hotmail.com',
    subject: `${msgProps.subject}: ${msgProps.name}`,
    html,
  };
}

const sendMail = async props => {
  const message = await getMessage(props);

  return new Promise((resolve, reject) => {
    mailgun.messages().send(message, (err, body) => err ? reject(err) : resolve(body));
  });
}

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(400).json({ msg: `invalid booking method: ${req.method}` });
  } else {
    return sendMail(req.body).then(({ id, message }) => {
      console.log(`Mail Sent: ${id}`);
      res.status(200).json({ status: 'OK', message });
    })
      .catch(e => { throw e });
  }
}
