class MailService {
    constructor(sender) {
      this.sender = sender;
    }
   
    sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
  }

// Subclass
class WhatsAppService extends MailService {
     // overriding constructor
  constructor(sender, isBusiness) {
    super(sender);
 
    this.isBusiness = isBusiness;
  }
    sendBroadcastMessage(message, receivers) {
      for (const receiver of receivers) {
        this.sendMessage(message, receiver);
      }
    }

    sendMessage(message, receiver) {
        super.sendMessage(message, receiver);
        // console.log(`${this.sender} sent ${message} to ${receiver} via WhatsApp`);
        console.log('message sent via WhatsApp');
      }
  }
   
  // Subclass
  class EmailService extends MailService {
    sendDelayedMessage(message, receiver, delay) {
      setTimeout(() => {
        this.sendMessage(message, receiver);
      }, delay);
    }
  } 

//   const whatsapp = new WhatsAppService('+6281234567890', true);
//   console.log(whatsapp);

const mailService = new MailService('someSender');
const whatsappService = new WhatsAppService('+6281234567890', true);

mailService.sendMessage('Hai, apa kabar?', 'someReceiver');
whatsappService.sendMessage('Hai, apa kabar?', '+6289876543210');



  //mengecek objeck
//   const whatsapp = new WhatsAppService('+6281234567890');
//   console.log(whatsapp instanceof WhatsAppService); // true
//   console.log(whatsapp instanceof EmailService); // false



  
//teknik prototype inheritance
// function MailService(sender) {
//     this.sender = sender;
//   }
   
//   MailService.prototype.sendMessage = function (message, receiver) {
//     console.log(`${this.sender} sent ${message} to ${receiver}`);
//   }
   
//   function WhatsAppService(sender) {
//     MailService.call(this, sender);
//   }
   
//   // Prototype inheritance
//   WhatsAppService.prototype = Object.create(MailService.prototype);
//   WhatsAppService.prototype.constructor = WhatsAppService;
   
//   WhatsAppService.prototype.sendBroadcastMessage = function (message, receivers) {
//     for (const receiver of receivers) {
//       this.sendMessage(message, receiver);
//     }
//   }
   
//   function EmailService(sender) {
//     MailService.call(this, sender);
//   }