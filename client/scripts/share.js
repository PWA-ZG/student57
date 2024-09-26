const shareButton = document.querySelector('.share-button');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');

const openFallbackDialog = () => {
  shareDialog.classList.add('fallback');
};

const closeFallbackDialog = () => {
  shareDialog.classList.remove('fallback');
};

// TODO: update these values
const data = {
  title: 'Test Title',
  text: 'Test text should be part of the message!',
  url: window.location.origin,
};

const nativeShare = async () => {
  try {
    await navigator.share(data);
    console.log('Thanks for sharing!');
  } catch (error) {
    console.log('User aborted sharing');
  }
};

const openDialog = navigator.share ? nativeShare : openFallbackDialog;
shareButton.addEventListener('click', openDialog);
closeButton.addEventListener('click', closeFallbackDialog);

const twitter = document.querySelector('.twitter');
twitter.href = `https://twitter.com/share?&url=${data.text}%0A${data.text}%0A${data.url}`;
const facebook = document.querySelector('.facebook');
facebook.href = `http://www.facebook.com/share.php?u=${data.url}`;
const email = document.querySelector('.email');
email.href = `mailto:?subject=${data.title}&body=${data.text}%0A${data.url}`;
const linkedin = document.querySelector('.linkedin');
linkedin.href = `https://www.linkedin.com/shareArticle?mini=true&url=${data.url}`;
const url = document.querySelector('.url');
url.innerHTML = data.url;

const copyLinkButton = document.querySelector('.copy-url');
const copyUrlToClipboard = () => {
  navigator.clipboard.writeText(data.url);
  copyLinkButton.innerHTML = 'Copied!';
};
copyLinkButton.addEventListener('click', copyUrlToClipboard);
