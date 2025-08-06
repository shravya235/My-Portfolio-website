// utils/icons.ts
import {
  Shield, Lock, Eye, Server, Code, Database,
  Network, Bug, FileSearch, AlertTriangle, Key, Zap, GraduationCap, Award, Calendar, 
  ExternalLink, Github,
  ShoppingCart,
  MessageCircle,
  Brain,
} from 'lucide-react';

export const iconMap = {
  Shield,
  Lock,
  Eye,
  Server,
  Code,
  Database,
  Network,
  Bug,
  FileSearch,
  AlertTriangle,
  Key,
  Zap,
  ShoppingCart,
  MessageCircle,
  Brain
};

export const lucideIcons = {
  GraduationCap,
  Award,
  Calendar
};

export const projectIcons = {
  ExternalLink, 
  Github, 
  Shield, 
  Lock, 
  Eye
};

export type ProjectIcon = keyof typeof iconMap;
export type LucideIcon = keyof typeof lucideIcons;
export type IconName = keyof typeof iconMap;
