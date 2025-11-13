import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Wifi, Link2, Mail, User, Radio } from 'lucide-react';
import { toast } from 'sonner';

export const NFCEncoder = () => {
  const [isEncoding, setIsEncoding] = useState(false);
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleEncode = async (type: string, data: any) => {
    setIsEncoding(true);
    
    // Simulate encoding process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsEncoding(false);
    toast.success('NFC Tag Encoded Successfully!', {
      description: `Your ${type} data has been written to the NFC tag.`,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold glow-text mb-4 terminal-text">NFC ENCODER</h1>
        <p className="text-muted-foreground">Write data to your NFC tags with precision</p>
      </div>

      <Card className="bg-card border-primary/30 glow-box p-8">
        <Tabs defaultValue="url" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-secondary/50 mb-8">
            <TabsTrigger value="url" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Link2 className="w-4 h-4 mr-2" />
              URL
            </TabsTrigger>
            <TabsTrigger value="text" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Radio className="w-4 h-4 mr-2" />
              Text
            </TabsTrigger>
            <TabsTrigger value="email" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <User className="w-4 h-4 mr-2" />
              Contact
            </TabsTrigger>
          </TabsList>

          <TabsContent value="url" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url" className="text-foreground">Website URL</Label>
              <Input
                id="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="bg-secondary border-primary/30 focus:border-primary transition-colors"
              />
            </div>
            <Button
              onClick={() => handleEncode('URL', { url })}
              disabled={isEncoding || !url}
              className="w-full bg-primary hover:bg-primary/80 text-primary-foreground glow-box"
            >
              {isEncoding ? (
                <span className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 animate-pulse" />
                  Encoding...
                </span>
              ) : (
                'Encode URL'
              )}
            </Button>
          </TabsContent>

          <TabsContent value="text" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="text" className="text-foreground">Text Content</Label>
              <Input
                id="text"
                placeholder="Enter your text message"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="bg-secondary border-primary/30 focus:border-primary transition-colors"
              />
            </div>
            <Button
              onClick={() => handleEncode('Text', { text })}
              disabled={isEncoding || !text}
              className="w-full bg-primary hover:bg-primary/80 text-primary-foreground glow-box"
            >
              {isEncoding ? (
                <span className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 animate-pulse" />
                  Encoding...
                </span>
              ) : (
                'Encode Text'
              )}
            </Button>
          </TabsContent>

          <TabsContent value="email" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="contact@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary border-primary/30 focus:border-primary transition-colors"
              />
            </div>
            <Button
              onClick={() => handleEncode('Email', { email })}
              disabled={isEncoding || !email}
              className="w-full bg-primary hover:bg-primary/80 text-primary-foreground glow-box"
            >
              {isEncoding ? (
                <span className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 animate-pulse" />
                  Encoding...
                </span>
              ) : (
                'Encode Email'
              )}
            </Button>
          </TabsContent>

          <TabsContent value="contact" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-secondary border-primary/30 focus:border-primary transition-colors"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">Phone</Label>
              <Input
                id="phone"
                placeholder="+1 234 567 8900"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-secondary border-primary/30 focus:border-primary transition-colors"
              />
            </div>
            <Button
              onClick={() => handleEncode('Contact', { name, phone })}
              disabled={isEncoding || !name || !phone}
              className="w-full bg-primary hover:bg-primary/80 text-primary-foreground glow-box"
            >
              {isEncoding ? (
                <span className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 animate-pulse" />
                  Encoding...
                </span>
              ) : (
                'Encode Contact'
              )}
            </Button>
          </TabsContent>
        </Tabs>

        {/* Status indicator */}
        <div className="mt-8 pt-6 border-t border-primary/30">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground terminal-text">STATUS:</span>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isEncoding ? 'bg-accent animate-pulse-glow' : 'bg-primary'}`} />
              <span className="text-foreground terminal-text">
                {isEncoding ? 'WRITING' : 'READY'}
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Info cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <Card className="bg-card/50 border-primary/20 p-4 hover:border-primary/40 transition-colors">
          <h3 className="font-semibold text-primary mb-2">Fast Encoding</h3>
          <p className="text-xs text-muted-foreground">Write data to your NFC tags in seconds</p>
        </Card>
        <Card className="bg-card/50 border-primary/20 p-4 hover:border-primary/40 transition-colors">
          <h3 className="font-semibold text-primary mb-2">Secure Protocol</h3>
          <p className="text-xs text-muted-foreground">Industry-standard encryption and security</p>
        </Card>
        <Card className="bg-card/50 border-primary/20 p-4 hover:border-primary/40 transition-colors">
          <h3 className="font-semibold text-primary mb-2">Universal Compatible</h3>
          <p className="text-xs text-muted-foreground">Works with all NFC-enabled devices</p>
        </Card>
      </div>
    </div>
  );
};
