import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Volume2, 
  VolumeX, 
  Music, 
  Settings,
  X,
  Minimize2
} from 'lucide-react';

interface Track {
  id: number;
  title: string;
  artist: string;
  src: string;
  duration?: number;
}

interface MusicContextType {
  isPlaying: boolean;
  currentTrack: Track | null;
  volume: number;
  isMuted: boolean;
  isEnabled: boolean;
  togglePlay: () => void;
  nextTrack: () => void;
  previousTrack: () => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  toggleEnabled: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};

// 샘플 음악 트랙 리스트 (실제 음악 파일로 교체 필요)
const defaultTracks: Track[] = [
  {
    id: 1,
    title: "학습의 시작",
    artist: "지식 플레이스",
    src: "/music/track1.mp3"
  },
  {
    id: 2,
    title: "집중의 시간",
    artist: "지식 플레이스",
    src: "/music/track2.mp3"
  },
  {
    id: 3,
    title: "성취의 기쁨",
    artist: "지식 플레이스",
    src: "/music/track3.mp3"
  },
  {
    id: 4,
    title: "도전의 용기",
    artist: "지식 플레이스",
    src: "/music/track4.mp3"
  },
  {
    id: 5,
    title: "지혜의 여행",
    artist: "지식 플레이스",
    src: "/music/track5.mp3"
  }
];

interface MusicProviderProps {
  children: React.ReactNode;
}

export const MusicProvider: React.FC<MusicProviderProps> = ({ children }) => {
  const [tracks] = useState<Track[]>(defaultTracks);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.3); // 기본 볼륨 30%
  const [isMuted, setIsMuted] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = tracks[currentTrackIndex] || null;

  // 로컬 스토리지에서 설정 불러오기
  useEffect(() => {
    const savedVolume = localStorage.getItem('musicVolume');
    const savedMuted = localStorage.getItem('musicMuted');
    const savedEnabled = localStorage.getItem('musicEnabled');

    if (savedVolume) setVolumeState(parseFloat(savedVolume));
    if (savedMuted) setIsMuted(savedMuted === 'true');
    if (savedEnabled) setIsEnabled(savedEnabled === 'true');
  }, []);

  // 오디오 엘리먼트 초기화
  useEffect(() => {
    if (currentTrack && isEnabled) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      
      audioRef.current = new Audio(currentTrack.src);
      audioRef.current.volume = isMuted ? 0 : volume;
      audioRef.current.loop = false;
      
      // 트랙 종료 시 다음 트랙으로 이동
      audioRef.current.addEventListener('ended', () => {
        nextTrack();
      });

      // 에러 처리
      audioRef.current.addEventListener('error', () => {
        console.warn(`음악 파일을 로드할 수 없습니다: ${currentTrack.src}`);
        nextTrack();
      });

      if (isPlaying) {
        audioRef.current.play().catch(() => {
          console.warn('음악 자동 재생이 차단되었습니다.');
          setIsPlaying(false);
        });
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentTrackIndex, isEnabled]);

  // 볼륨 및 음소거 상태 업데이트
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!isEnabled || !audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        console.warn('음악 재생에 실패했습니다.');
      });
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    if (!isEnabled) return;
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const previousTrack = () => {
    if (!isEnabled) return;
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
    localStorage.setItem('musicVolume', newVolume.toString());
  };

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    localStorage.setItem('musicMuted', newMuted.toString());
  };

  const toggleEnabled = () => {
    const newEnabled = !isEnabled;
    setIsEnabled(newEnabled);
    localStorage.setItem('musicEnabled', newEnabled.toString());
    
    if (!newEnabled && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const contextValue: MusicContextType = {
    isPlaying,
    currentTrack,
    volume,
    isMuted,
    isEnabled,
    togglePlay,
    nextTrack,
    previousTrack,
    setVolume,
    toggleMute,
    toggleEnabled
  };

  return (
    <MusicContext.Provider value={contextValue}>
      {children}
    </MusicContext.Provider>
  );
};

// 음악 플레이어 컴포넌트
export const MusicPlayer: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const {
    isPlaying,
    currentTrack,
    volume,
    isMuted,
    isEnabled,
    togglePlay,
    nextTrack,
    previousTrack,
    setVolume,
    toggleMute,
    toggleEnabled
  } = useMusic();

  if (!isEnabled) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={toggleEnabled}
          className="bg-gray-600 hover:bg-gray-700 text-white rounded-full p-3"
          title="음악 켜기"
        >
          <Music size={20} />
        </Button>
      </div>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-50">
        <Card className="bg-white/90 backdrop-blur-sm shadow-lg">
          <CardContent className="p-2 sm:p-3">
            <div className="flex items-center gap-1 sm:gap-2">
              <Button
                onClick={togglePlay}
                size="sm"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-1.5 sm:p-2"
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              </Button>
              <div className="text-xs sm:text-sm font-medium text-gray-700 max-w-20 sm:max-w-32 truncate">
                {currentTrack?.title || '음악 없음'}
              </div>
              <Button
                onClick={() => setIsMinimized(false)}
                size="sm"
                variant="ghost"
                className="p-0.5 sm:p-1"
              >
                <Settings size={12} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-50">
      <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-2 border-blue-200">
        <CardContent className="p-3 sm:p-4 w-72 sm:w-80">
          {/* 헤더 */}
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <div className="flex items-center gap-1 sm:gap-2">
              <Music className="text-blue-500" size={16} />
              <span className="text-sm sm:text-base font-semibold text-gray-800">음악 플레이어</span>
            </div>
            <div className="flex gap-0.5 sm:gap-1">
              <Button
                onClick={() => setShowSettings(!showSettings)}
                size="sm"
                variant="ghost"
                className="p-0.5 sm:p-1"
              >
                <Settings size={14} />
              </Button>
              <Button
                onClick={() => setIsMinimized(true)}
                size="sm"
                variant="ghost"
                className="p-0.5 sm:p-1"
              >
                <Minimize2 size={14} />
              </Button>
              <Button
                onClick={toggleEnabled}
                size="sm"
                variant="ghost"
                className="p-0.5 sm:p-1 text-red-500 hover:text-red-700"
              >
                <X size={14} />
              </Button>
            </div>
          </div>

          {/* 현재 트랙 정보 */}
          <div className="text-center mb-4">
            <div className="font-medium text-gray-800 truncate">
              {currentTrack?.title || '음악을 선택해주세요'}
            </div>
            <div className="text-sm text-gray-600 truncate">
              {currentTrack?.artist || ''}
            </div>
          </div>

          {/* 컨트롤 버튼 */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <Button
              onClick={previousTrack}
              size="sm"
              variant="outline"
              className="rounded-full p-2"
            >
              <SkipBack size={16} />
            </Button>
            <Button
              onClick={togglePlay}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </Button>
            <Button
              onClick={nextTrack}
              size="sm"
              variant="outline"
              className="rounded-full p-2"
            >
              <SkipForward size={16} />
            </Button>
          </div>

          {/* 볼륨 컨트롤 */}
          <div className="flex items-center gap-3 mb-3">
            <Button
              onClick={toggleMute}
              size="sm"
              variant="ghost"
              className="p-1"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </Button>
            <Slider
              value={[isMuted ? 0 : volume * 100]}
              onValueChange={(value) => setVolume(value[0] / 100)}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-gray-600 w-8">
              {Math.round((isMuted ? 0 : volume) * 100)}%
            </span>
          </div>

          {/* 설정 패널 */}
          {showSettings && (
            <div className="border-t pt-3 mt-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">음악 활성화</span>
                <Button
                  onClick={toggleEnabled}
                  size="sm"
                  variant={isEnabled ? "default" : "outline"}
                  className="text-xs"
                >
                  {isEnabled ? "켜짐" : "꺼짐"}
                </Button>
              </div>
              <div className="text-xs text-gray-500">
                • 음악은 자동으로 연속 재생됩니다
                • 브라우저 정책에 따라 자동 재생이 제한될 수 있습니다
                • 설정은 자동으로 저장됩니다
              </div>
            </div>
          )}

          {/* 상태 표시 */}
          <div className="flex justify-center">
            <Badge variant={isPlaying ? "default" : "secondary"} className="text-xs">
              {isPlaying ? "재생 중" : "일시정지"}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};