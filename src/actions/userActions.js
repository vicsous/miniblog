import axios from 'axios';
import { auth } from '../firebase';

const url = 'http://localhost:3001/api';

export const createNewPost = async (author, message) => {
    const header = await createToken();
    const payload = {
      author,
      message
    }
    try {
      const res = await axios.post(url, payload, header);
      return res.data;
  } catch (e) {
      console.error(e);
    }
  };

  export const getPosts = async () => {
    const header = await createToken();
  try {
      const res = await axios.get(url, header);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  }

const createToken = async () => {
    const user = auth.currentUser
    const token = user && (await user.getIdToken());
    const payloadHeader = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    return payloadHeader;
  }
  