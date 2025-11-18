import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  nickname: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, nickname: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // 초기 로드 시 로컬 스토리지에서 사용자 정보 확인
  useEffect(() => {
    const savedUser = localStorage.getItem('educationalGameUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Failed to parse saved user data:', error);
        localStorage.removeItem('educationalGameUser');
      }
    }
    setLoading(false);
  }, []);

  // 로그인 함수
  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    
    try {
      // 실제 구현에서는 서버 API 호출
      // 여기서는 로컬 스토리지를 사용한 간단한 구현
      const savedUsers = JSON.parse(localStorage.getItem('educationalGameUsers') || '[]');
      const existingUser = savedUsers.find((u: any) => u.email === email && u.password === password);
      
      if (!existingUser) {
        throw new Error('이메일 또는 비밀번호가 올바르지 않습니다.');
      }

      const userData: User = {
        id: existingUser.id,
        email: existingUser.email,
        nickname: existingUser.nickname,
        createdAt: existingUser.createdAt
      };

      setUser(userData);
      localStorage.setItem('educationalGameUser', JSON.stringify(userData));
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // 회원가입 함수
  const signup = async (email: string, password: string, nickname: string): Promise<void> => {
    setLoading(true);
    
    try {
      // 기존 사용자 확인
      const savedUsers = JSON.parse(localStorage.getItem('educationalGameUsers') || '[]');
      const existingUser = savedUsers.find((u: any) => u.email === email);
      
      if (existingUser) {
        throw new Error('이미 등록된 이메일입니다.');
      }

      // 새 사용자 생성
      const newUser = {
        id: Date.now().toString(),
        email,
        password, // 실제 구현에서는 해시화 필요
        nickname,
        createdAt: new Date().toISOString()
      };

      // 사용자 목록에 추가
      savedUsers.push(newUser);
      localStorage.setItem('educationalGameUsers', JSON.stringify(savedUsers));

      // 현재 사용자로 설정
      const userData: User = {
        id: newUser.id,
        email: newUser.email,
        nickname: newUser.nickname,
        createdAt: newUser.createdAt
      };

      setUser(userData);
      localStorage.setItem('educationalGameUser', JSON.stringify(userData));
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // 로그아웃 함수
  const logout = () => {
    setUser(null);
    localStorage.removeItem('educationalGameUser');
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    signup,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};