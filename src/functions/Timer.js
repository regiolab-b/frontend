import React, { useState, useEffect } from 'react';
import { articlesApi } from '../services/rnApi';
import { useParams } from "react-router-dom";

export const Timer = () => {
  const [startTime, setStartTime] = useState(new Date());
  const { id } = useParams();
  let timer

  const startTimer = () => {
    setStartTime(new Date())
    timer = setInterval(() => {
      const milliseconds = new Date() - startTime
      const seconds = (Math.round(milliseconds / 1000))

      if(seconds > 10) {
        articlesApi.likeArticle(id)
        stopTimer()
      }
    }, 1000);
  }

  const stopTimer = () => {
    clearInterval(timer)
  }

  useEffect(() => {
    startTimer()
    return function cleanup() {
      stopTimer()
    };
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <> </>
  );
};
