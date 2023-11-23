import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate} from 'react-router-dom';
import React, { useEffect} from 'react';
import { addreview,viewData } from './apiCalls';


import {
  Button,
  Typography,
  TextField,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  Paper,
  Grid,
} from '@mui/material';

import Header from './Header';
import Footer from './Footer';


interface codeReview {
    microsoft_generated_comment : string;
    our_review_comment : string;
    patch_file : string;
    patch_id : number;
}

function Survey() {
    
    const [formData, setFormData] = useState<{
        name: string;
        company: string;
        dataset: string;
        language: string;
        reviewer_suggestion: string;
        rating: number;
    }>({
        name: '',
        company: '',
        dataset: '',
        language: '',
        reviewer_suggestion: '',
        rating: 0,
    });


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {

          const dataToSend = {
            ...formData,
            name: formData.name,
            company: formData.company,
            dataset: formData.dataset,
            language: formData.language,
          };
    
          const res = await viewData(dataToSend);
          
        } catch (err) {
          console.log(err);
        }
      };


    return (
        <>
        <div>
            <Header />
        </div>
        

        
        <div className="mt-16">
            <Footer />
        </div>
        </>
    );
}

export default Survey;
