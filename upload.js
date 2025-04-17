document.addEventListener('DOMContentLoaded', () => {
    const noteForm = document.getElementById('note-form');
    const submitBtn = document.getElementById('submit-btn');
    
    noteForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Check if user is logged in
        const user = firebase.auth().currentUser;
        if (!user) {
            alert('Please login to upload notes');
            document.getElementById('login-btn').click();
            return;
        }
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Uploading...';
        
        const title = document.getElementById('note-title').value;
        const content = document.getElementById('note-content').value;
        const tags = document.getElementById('note-tags').value
            .split(',')
            .map(tag => tag.trim())
            .filter(tag => tag.length > 0);
        
        try {
            // Upload files first
            const attachments = await fileUploader.uploadFiles(user.uid);
            
            // Create note data
            const noteData = {
                title,
                content,
                tags,
                attachments,
                author: user.email,
                authorId: user.uid,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            };
            
            // Add note to Firestore
            await firebase.firestore().collection('notes').add(noteData);
            
            alert('Note uploaded successfully!');
            noteForm.reset();
            fileUploader.clearFiles();
        } catch (error) {
            console.error('Upload error:', error);
            alert('Error uploading note: ' + error.message);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Upload Note';
        }
    });
});
