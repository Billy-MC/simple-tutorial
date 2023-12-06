import { useEffect, useState } from 'react';
import axios from 'axios';
const HomePage = () => {
	const [file, setFile] = useState(null);
	const [imageUrl, setImageUrl] = useState('');
	console.log('🚀 ~ file: HomePage.jsx:6 ~ HomePage ~ imageUrl:', imageUrl);

	const fileOnChangeHandler = (event) => {
		setFile(event.target.files[0]);
	};

	const uploadFile = async () => {
		if (!file) {
			return;
		}

		try {
			const uploadResponse = await axios.get('http://localhost:8000/api/v1/getPresignedUrl', {
				params: { fileName: file.name, fileType: file.type },
			});

			const { presignedUrl: uploadUrl } = uploadResponse.data;

			await axios.put(uploadUrl, file, {
				headers: {
					'Content-Type': file.type,
				},
			});

			const downloadResponse = await axios.get(
				'http://localhost:8000/api/v1/getDownloadPresignedUrl',
				{
					params: { fileName: file.name },
				}
			);

			const { presignedUrl: downloadUrl } = downloadResponse.data;
			setImageUrl(downloadUrl);
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div>
			<input type='file' onChange={fileOnChangeHandler} />
			<button onClick={uploadFile}>Upload</button>
			{imageUrl ? <img src={imageUrl} alt='imageName' /> : null}
		</div>
	);
};
export default HomePage;
