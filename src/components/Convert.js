import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    const convertText = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: text,
            target: language.value,
            // set it to only works in localhost:3000
            key: 'AIzaSyAfOuq8-aLtjmS97JJ1SQiuxpcyo5OwtY8',
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    convertText();
    }, [language, text]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;