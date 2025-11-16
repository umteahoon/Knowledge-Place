import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  nickname: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, nickname: string) => Promise<boolean>;
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
  const [isLoading, setIsLoading] = useState(true);

  // 로컬 스토리지에서 사용자 정보 로드
  useEffect(() => {
    const loadUser = () => {
      try {
        const savedUser = localStorage.getItem('knowledgeplace_user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error('Failed to load user from localStorage:', error);
        localStorage.removeItem('knowledgeplace_user');
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  // 로그인 함수
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // 로컬 스토리지에서 사용자 목록 가져오기
      const users = JSON.parse(localStorage.getItem('knowledgeplace_users') || '[]');
      
      // 이메일과 비밀번호 확인
      const foundUser = users.find((u: any) => u.email === email && u.password === password);
      
      if (foundUser) {
        const userInfo: User = {
          id: foundUser.id,
          email: foundUser.email,
          nickname: foundUser.nickname,
          createdAt: foundUser.createdAt
        };
        
        setUser(userInfo);
        localStorage.setItem('knowledgeplace_user', JSON.stringify(userInfo));
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  // 회원가입 함수
  const register = async (email: string, password: string, nickname: string): Promise<boolean> => {
    try {
      // 기존 사용자 목록 가져오기
      const users = JSON.parse(localStorage.getItem('knowledgeplace_users') || '[]');
      
      // 이메일 중복 확인
      if (users.some((u: any) => u.email === email)) {
        return false;
      }
      
      // 새 사용자 생성
      const newUser = {
        id: Date.now().toString(),
        email,
        password, // 실제 서비스에서는 해시화 필요
        nickname,
        createdAt: new Date().toISOString()
      };
      
      // 사용자 목록에 추가
      users.push(newUser);
      localStorage.setItem('knowledgeplace_users', JSON.stringify(users));
      
      // 로그인 처리
      const userInfo: User = {
        id: newUser.id,
        email: newUser.email,
        nickname: newUser.nickname,
        createdAt: newUser.createdAt
      };
      
      setUser(userInfo);
      localStorage.setItem('knowledgeplace_user', JSON.stringify(userInfo));
      
      return true;
    } catch (error) {
      console.error('Register error:', error);
      return false;
    }
  };

  // 로그아웃 함수
  const logout = () => {
    setUser(null);
    localStorage.removeItem('knowledgeplace_user');
  };

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    register,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};