# 🎙️ NFC Whisper Studio

**NFC Whisper Studio** is a versatile platform designed to bridge the gap between physical NFC (Near Field Communication) triggers and automated AI transcription. Using OpenAI's Whisper model, this project allows users to initiate, manage, or automate speech-to-text workflows via NFC tags.

## ✨ Features

* **NFC Triggers:** Start recording or transcribing by simply tapping an NFC tag.
* **Studio-Grade Transcription:** Utilizes OpenAI's Whisper for high-accuracy, multilingual speech-to-text.
* **Automation Ready:** Designed to integrate with IoT workflows or mobile automation.
* **Local or Cloud Inference:** (Mention if you use `faster-whisper` for local or the OpenAI API for cloud).
* **Easy Management:** A centralized "studio" interface to view and export transcriptions.

## 🚀 Getting Started

### Prerequisites

* An NFC-enabled device (Smartphone, ACR122U Reader, etc.)
* Python 3.8+ (if applicable)
* `ffmpeg` installed on your system
* OpenAI API Key (if using the cloud version)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/samyakrajbayar/nfc-whisper-studio.git
cd nfc-whisper-studio

```


2. **Install dependencies:**
```bash
pip install -r requirements.txt

```


3. **Set up Environment Variables:**
Create a `.env` file in the root directory:
```env
OPENAI_API_KEY=your_key_here
NFC_READER_ID=default

```



## 🛠 Usage

1. **Run the Studio Server:**
```bash
python app.py

```


2. **Scan an NFC Tag:** Program your NFC tag to send a request to the `/trigger` endpoint.
3. **Record & Transcribe:** The studio will capture audio, process it through Whisper, and save the output.

## 📂 Project Structure

```text
├── src/                # Core logic for NFC and Whisper
├── web/                # Studio Dashboard UI
├── models/             # Local whisper models (if any)
├── outputs/            # Saved transcriptions (.txt, .json)
└── requirements.txt    # Python dependencies

```

## 🤝 Contributing

Contributions are welcome! If you have ideas for improving the NFC integration or the studio interface, feel free to:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

