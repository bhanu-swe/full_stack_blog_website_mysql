import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Write() {
    const [value, setValue] = useState('');

    return (
        <div className="mx-2 min-h-screen">
            <div className="max-w-screen-lg mx-auto flex justify-between">
                <div className="w-2/3">
                    <input type="text" placeholder="Title" className="w-full max-w-full mb-5 border border-solid border-lightgreen border-2 px-4 py-2" />
                    <div className="editcontainer h-80 overflow-y-scroll border border-solid border-lightgreen border-2">
                        <ReactQuill theme="snow" value={value} onChange={setValue} style={{ height: 'calc(100% - 40px)' }} />
                    </div>
                </div>
                <div  className="w-1/3 ml-5 flex-2 flex-col justify-between ">
                    <div  className="flex-1 flex-col justify-between border border-solid border-lightgreen border-2 mb-5">
                        <div className="flex-col mt-1 md-1">
                            <h1 >Publish</h1>
                        </div>
                        <div className="flex-col mt-1 mb-1">
                            <span><b>Status:</b> draft</span>
                        </div>
                        <div className="flex-col mt-1 mb-1">
                            <span><b>Visibility:</b> draft</span>
                        </div>
                        <div className="flex-col mt-1 mb-1">
                            <input style={{ display: 'none' }} type="file" id="file" name="" />
                            <label  className='underline cursor-pointer' htmlFor="file">Upload file</label>
                        </div>
                        <div className="flex-col mt-1 mb-1">
                            <div className="flex justify-between">
                                <button className='cursor-pointer border border-teal-500 text-teal-500 px-3 py-1 rounded'>Save as Draft</button>
                                <button className='cursor-pointer border border-teal-500 text-white bg-teal-500 px-3 py-1 rounded'>Update</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 flex-col justify-between border border-solid border-lightgreen border-2 mb-5'>
                        <h2>Category</h2>
                        <div className="flex items-center  gap-2 text-teal-500">
                             <input type="radio" name="cat" value="art" id="art" checked />
                            <label htmlFor="art">Art</label>
                        </div>
                        <div className="flex items-center gap-2 text-teal-500">
                             <input type="radio" name="cat" value="science" id="science" />
                             <label htmlFor="science">Science</label>
                        </div>
                         <div className="flex items-center gap-2 text-teal-500">
                            <input type="radio" name="cat" value="technology" id="technology" />
                            <label htmlFor="technology">Technology</label>
                        </div>
                        <div className="flex items-center gap-2 text-teal-500">
                             <input type="radio" name="cat" value="cinema" id="cinema" />
                            <label htmlFor="cinema">Cinema</label>
                         </div>
                         <div className="flex items-center gap-2 text-teal-500">
                            <input type="radio" name="cat" value="design" id="design" />
                            <label htmlFor="design">Design</label>
                        </div>
                        <div className="flex items-center gap-2 text-teal-500">
                            <input type="radio" name="cat" value="food" id="food" />
                            <label htmlFor="food">Food</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Write;
