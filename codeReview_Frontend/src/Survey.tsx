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
  Card,
  Rating,
} from '@mui/material';

import Header from './Header';
import Footer from './Footer';




interface codeReview {
    microsoft_generated_comment : string;
    our_review_comment : string;
    patch_file : string;
    data_id : string;
}

function Survey() {
    
    const [formData, setFormData] = useState<{
        name: string;
        company: string;
        dataset: string;
        language: string;
        reviewer_suggestion: string;
        info_rating: number;
        relevance_rating: number;
        reviewer_review_text: string;
    }>({
        name: '',
        company: '',
        dataset: '',
        language: '',
        reviewer_suggestion: '',
        info_rating: 0,
        relevance_rating: 0,
        reviewer_review_text: '',
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
         <div className="ml-20 mt-24">
          <div>
            <div className="side-nav-item">
                <div className="flex flex-row">
                <div style={{ flex: 1 }}>
                    <TextField 
                        id="outlined-basic" 
                        label="Your name" 
                        variant="outlined"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <TextField 
                        id="outlined-basic" 
                        label="Your Company" 
                        variant="outlined"
                        value={formData.company}
                        onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                        }
                    />
                </div>
                </div>

                <div className="flex flex-row mt-10">

                <select
                  name="language"
                  id="language"
                    className="p-2 border-2 rounded-lg bg-white text-blue-500"
                  value={formData.language}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        setFormData({ ...formData, language: e.target.value })
                }
                >
                  <option value="">Select your preferred language</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="javascript">Javascript</option>
                  <option value="c++">C++</option>
                  <option value="c">C</option>
                  <option value="c#">C#</option>
                  <option value="go">Go</option>
                  <option value="php">PHP</option>
                  <option value="ruby">Ruby</option>
                </select>
                </div>
                </div>
                </div>
                </div>

                <div className="flex flex-row mt-10 ml-20">
                    <div style={{ flex: 1 }}>
                    <Card className="p-4 mr-10">
                            <Typography variant="h6" className="mb-4">
                                Patch File 
                            </Typography>
                        </Card>
                    </div>
                    <div style={{ flex: 1 }}>
                    <div style={{ flex: 1 }}>
                        <Card className="p-4 mr-10">
                            <Typography variant="h6" className="mb-4">
                                Microsoft Generated Comment
                            </Typography>
                        </Card>
                       
                        <hr className="mt-4" />

                    </div>

                    <div style={{ flex: 1 }}>
                    <Card className="p-4 mr-10">
                            <Typography variant="h6" className="mb-4">
                                Our Review Comment
                            </Typography>
                        </Card>
                    </div>
                      
                    </div>
                   
                </div>

                

                <div className="flex flex-row mt-10 ">
                <div style={{ flex: 1 }}>
                <div className="flex justify-between mt-4 ml-20 mr-20">
              <Typography >Rate our comment on basis of information : </Typography>
              <Rating
                name="info_rating"
                value={formData.info_rating || 0}
                onChange={(event, newValue) =>
                    setFormData({ ...formData, info_rating: newValue })
                }
              />
            </div>
            </div>
            <div style={{ flex: 1 }}>
            <div className="flex justify-between mt-4 mr-20">
                <Typography component="legend">Rate our comment on basis of relevance : </Typography>
                <Rating
                    name="relevance_rating"
                    value={formData.relevance_rating || 0}
                    onChange={(event, newValue) =>
                    setFormData({ ...formData, relevance_rating: newValue })
                    }
                />
                </div>
            </div>
            </div>
            
            <div className="flex justify-between mt-4 ml-20 mr-10">
              <TextField
                label="What will you suggest to be commented on this patch file?"
                name="reviewer_suggestion"
                type="text"
                value={formData.reviewer_review_text}
                onChange={(e) =>
                  setFormData({ ...formData, reviewer_review_text: e.target.value })
                }
                variant="outlined"
                required
                fullWidth
              />
            </div>

               
                

                <div className="flex flex-col items-center justify-center mt-10">
                <Button
                variant="contained"
                color="primary"
                type="submit"
                className="mt-4"
                >

                Submit
                </Button>
                </div>
                
                
        
        <div className="mt-16">
            <Footer />
        </div>
        </>

    );
}

export default Survey;
