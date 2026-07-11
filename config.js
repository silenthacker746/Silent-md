const fs = require('fs');
const dotenv = require('dotenv');

if (fs.existsSync('.env')) {
    dotenv.config({ path: '.env' });
}

module.exports = {
    // ===========================================================
    // 1. CONFIGURATION DE BASE (Session & Database)
    // ===========================================================
    SESSION_ID: process.env.SESSION_ID || "MINI BOT", 
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://offarslan_db_user:arslanmd@cluster0.xrqkzwg.mongodb.net/?appName=Cluster0',
    
    // ===========================================================
    // 2. INFORMATIONS DU BOT
    // ===========================================================
    PREFIX: process.env.PREFIX || '.',
    OWNER_NUMBER: process.env.OWNER_NUMBER || '+923281930258', // Mettez votre numéro ici
    BOT_NAME: "𝐒𝐈𝐋𝐄𝐍𝐓 𝐗 𝐀𝐁𝐃𝐔𝐋𝐐𝐔𝐀𝐌 𝐌𝐃",
    BOT_FOOTER: '© 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐒𝐈𝐋𝐄𝐍𝐓 𝐇𝐀𝐂𝐊𝐄𝐓',
    
    // Mode de travail : public, private, group, inbox
    WORK_TYPE: process.env.WORK_TYPE || "public", 
    
    // ===========================================================
    // 3. FONCTIONNALITÉS AUTOMATIQUES (STATUTS)
    // ===========================================================
    AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || 'true', // Voir automatiquement les statuts
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'true', // Liker automatiquement les statuts
    AUTO_LIKE_EMOJI: ['❤️', '🌹', '✨', '🥰', '🌹', '😍', '💞', '💕', '☺️', '🤗'], 
    
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'false', // Répondre aux statuts
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || '🤗', // Message de réponse
    
    // ===========================================================
    // 4. FONCTIONNALITÉS DE CHAT & PRÉSENCE
    // ===========================================================
    READ_MESSAGE: process.env.READ_MESSAGE || 'false', // Marquer les messages comme lus (Blue Tick)
    AUTO_TYPING: process.env.AUTO_TYPING || 'false', // Afficher "Écrit..."
    AUTO_RECORDING: process.env.AUTO_RECORDING || 'false', // Afficher "Enregistre..."
    
    // ===========================================================
    // 5. GESTION DES GROUPES
    // ===========================================================
    WELCOME_ENABLE: process.env.WELCOME_ENABLE || 'true',
    GOODBYE_ENABLE: process.env.GOODBYE_ENABLE || 'true',
    WELCOME_MSG: process.env.WELCOME_MSG || null, 
    GOODBYE_MSG: process.env.GOODBYE_MSG || null, 
    WELCOME_IMAGE: process.env.WELCOME_IMAGE || null, 
    GOODBYE_IMAGE: process.env.GOODBYE_IMAGE || null,
    
    GROUP_INVITE_LINK: process.env.GROUP_INVITE_LINK || 'https://chat.whatsapp.com/BEi1klCA2Dy5oY4ro2wzYb',
    
    // ===========================================================
    // 6. SÉCURITÉ & ANTI-CALL
    // ===========================================================
    ANTI_CALL: process.env.ANTI_CALL || 'false', // Rejeter les appels
    REJECT_MSG: process.env.REJECT_MSG || '*CALL LATER PLEASE ☺️🌹*',
    
    // ===========================================================
    // 7. IMAGES & LIENS
    // ===========================================================
    IMAGE_PATH: 'https://files.catbox.moe/prkkzj.png',
    CHANNEL_LINK: 'https://whatsapp.com/channel/0029VbC4ETA2ER6f2ABWRj3A',
    
    // ===========================================================
    // 8. EXTERNAL API (Optionnel)
    // ===========================================================
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '8848555954:AAFBhval1sA_mxj1DmHpEWzRGnof_xqghU4',
    TELEGRAM_CHAT_ID: process.env.  TELEGRAM_CHAT_ID || '+923281930258'
    
};
  
