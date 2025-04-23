# Resume Organizer  

📂 A lightweight application to systematically store resume copies tailored for specific job applications.  

## Overview  
This tool simplifies job application tracking by automatically creating structured folders and saving your uploaded resume directly into them. Designed for clarity—no version tracking, just organized storage.  

## Key Features  
- **Smart Folder Creation**: Generates folders using this format:  
  `[job_id(optional)]-[job_title]-[company]-[YYYY-MMDD]`  
  *(Example: "- Software Engineer, Associate - GOLDMAN SACHS - 2025-0423")*  
- **Dedicated Resume Storage**: Saves your uploaded PDF directly to the job-specific folder.  
- **Job ID Flexibility**: Optional field for custom identifiers (e.g., referral codes).  

## How It Works  
1. **Enter Job Details**:  
   - Job Title *(Required)*  
   - Company Name *(Required)*  
   - Date Applied *(Auto-formatted as YYYY-MMDD in folder names)*  
   - Job ID *(Optional)*  
2. **Upload Resume**: Select your PDF file.  
3. **Save**: Resumes are stored in a dedicated folder like:  
   `D:\Applications and Resumes\[folder_name]\[resume_filename.pdf]`  

## Why Use This?  
- 🗂️ **Never Lose Resumes**: Avoid duplicate filenames or overwriting files.  
- 🔍 **Quick Retrieval**: Instantly locate resumes sent to specific companies.  
- 🚫 **No More Manual Folders**: Automates folder creation with standardized naming.

## Installation
- Node.js installed on your system
- D:\ drive (or modify paths in `renderer.js` for alternate locations)
### Setup Instructions
1. **Prepare Storage Location**  
   Create a folder named "Applications and Resumes" in your D:\ drive:  
   ```bash
   mkdir D:\Applications and Resumes
2. **Clone and Configure**
   - git clone https://github.com/yourusername/resume-organizer.git
  - cd resume-organizer
3. **Build the Application**
  Install dependencies and package the app:
    - npm install --save-dev electron-packager
    - npx electron-packager . JobSaver --platform=win32 --arch=x64 --overwrite
4. Run the Application
  Execute the generated JobSaver.exe - it will automatically save resumes to:
  D:\Applications and Resumes\[Job Title] - [Company] - [Date]

### Example Output  
![image](https://github.com/user-attachments/assets/3e28cca6-5b12-4a62-896f-1235adaef552)
![image](https://github.com/user-attachments/assets/651e90e7-a497-445c-af86-3d1fa4191658)
