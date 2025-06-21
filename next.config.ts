import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React 19 지원
  experimental: {
    reactCompiler: true,
    serverActions: {
      bodySizeLimit: '2mb',
    },
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  
  // 이미지 최적화 설정
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['localhost', 'your-api-domain.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // 컴파일러 설정
  compiler: {
    // styled-components 사용시
    // styledComponents: true,
    
    // emotion 사용시
    // emotion: true,
  },
  
  // 환경 변수 설정
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // 리다이렉트 설정 (필요시)
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
  
  // 헤더 설정 (필요시)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // 웹팩 설정 (필요시)
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // 클라이언트 사이드에서만 사용할 모듈 설정
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // 커스텀 웹팩 설정
    return config;
  },
  
  // TypeScript 설정
  typescript: {
    // 빌드 시 타입 체크 비활성화 (개발 시에는 활성화 권장)
    ignoreBuildErrors: false,
  },
  
  // ESLint 설정
  eslint: {
    // 빌드 시 ESLint 체크 비활성화 (개발 시에는 활성화 권장)
    ignoreDuringBuilds: false,
  },
  
  // 출력 설정
  output: 'standalone', // Docker 배포시 유용
  
  // 압축 설정
  compress: true,
  
  // 소스맵 설정
  productionBrowserSourceMaps: false,
  
  // 정적 파일 최적화
  poweredByHeader: false,
  
  // React Strict Mode
  reactStrictMode: true,
  
  // SWC 최소화
  // swcMinify: true,

  // API 라우트 설정
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_MGW_URL}/:path*`,
      },
    ];
  },

  // 트레일링 슬래시 설정
  trailingSlash: false,
};

export default nextConfig;