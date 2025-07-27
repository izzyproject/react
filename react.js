import { useState } from 'react'; import { Button } from "@/components/ui/button"; import { Input } from "@/components/ui/input"; import { Card, CardContent } from "@/components/ui/card"; import { Loader2 } from 'lucide-react';

export default function SunoAIBot() { const [prompt, setPrompt] = useState(''); const [loading, setLoading] = useState(false); const [videoURL, setVideoURL] = useState('');

const handleGenerate = async () => { if (!prompt) return; setLoading(true);

// Simulasi proses generate (Nanti diganti API request sungguhan ke Suno AI + Video Render Backend)
setTimeout(() => {
  const dummyVideo = 'https://dummyvideo.com/your-music-visualizer.mp4';
  setVideoURL(dummyVideo);
  setLoading(false);
}, 3000);

};

return ( <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white p-4"> <Card className="w-full max-w-xl shadow-2xl rounded-2xl"> <CardContent className="space-y-6"> <h1 className="text-3xl font-bold text-center">🎶 Suno AI Music Bot</h1> <Input placeholder="Tulis ide lagu kamu di sini..." value={prompt} onChange={(e) => setPrompt(e.target.value)} className="text-black" /> <Button className="w-full text-lg" onClick={handleGenerate} disabled={loading || !prompt} > {loading ? <Loader2 className="animate-spin mr-2" /> : 'Generate Lagu + Visualizer'} </Button>

{videoURL && (
        <div className="mt-6">
          <p className="text-center text-green-400 font-semibold">✅ Lagu & Video Berhasil Dibuat!</p>
          <video src={videoURL} controls className="w-full mt-4 rounded-xl shadow-lg" />
          <a href={videoURL} download className="block mt-4">
            <Button variant="outline" className="w-full">Download Video</Button>
          </a>
        </div>
      )}
    </CardContent>
  </Card>
</div>

); }

  
