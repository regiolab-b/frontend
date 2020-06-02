import React, { useEffect, useRef } from 'react';
import { articlesApi } from '../services/rnApi';
import { useParams } from "react-router-dom";

export const Timer = () => {
  const { id } = useParams();
  let timeout = useRef()

  useEffect(() => {
    timeout.current = setTimeout(() => {
      articlesApi.likeArticle(id)
    }, 5000)
    return function cleanup() {
      clearTimeout(timeout.current)
    };
  }, [id]); 

  return (
    <> </>
  );
};
