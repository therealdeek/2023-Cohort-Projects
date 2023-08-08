export const CLIENT_ID = 'd06dc4ac07a5f21';
export const CLIENT_SECRET = '7545823501c0fbef01dc8925c139202e01a9083a';
export const ACCESS_TOKEN = 'babe4867b94d8849bacde6162fb7e37aa08aaa2f';

async function uploadImage(imageFile: File): Promise<string> {
    const formData = new FormData();
    formData.append('image', imageFile);
  
    const response = await fetch('https://api.imgur.com/3/image', {
      method: 'POST',
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`,
      },
      body: formData,
    });
  
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await response.json();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    //console.log(data)
    return data.data.link;
  }
  
  export default uploadImage;