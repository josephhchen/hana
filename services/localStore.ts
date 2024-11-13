export interface TodoItem {
    id: string;
    text: string;
    completed: boolean;
    createdAt: number;
  }
  
  export interface PhotoAlbum {
    id: string;
    name: string;
    photos: string[];
    createdAt: number;
  }
  
  export interface Settings {
    userName: string;
    timeFormat: '12h' | '24h';
    temperature: 'celsius' | 'fahrenheit';
    notifications: boolean;
  }
  
  export interface HomeData {
    todos: TodoItem[];
    albums: PhotoAlbum[];
    settings: Settings;
    lastUpdated: number;
  }
  
  const DEFAULT_DATA: HomeData = {
    todos: [],
    albums: [],
    settings: {
      userName: 'Guest',
      timeFormat: '12h',
      temperature: 'celsius',
      notifications: true,
    },
    lastUpdated: Date.now(),
  };
  
  export const localStore = {
    getData: (): HomeData => {
      if (typeof window === 'undefined') return DEFAULT_DATA;
      const stored = localStorage.getItem('home_assistant_data');
      return stored ? JSON.parse(stored) : DEFAULT_DATA;
    },
  
    setData: (data: HomeData) => {
      if (typeof window === 'undefined') return;
      localStorage.setItem('home_assistant_data', JSON.stringify({
        ...data,
        lastUpdated: Date.now(),
      }));
    },
  
    updateSettings: (settings: Partial<Settings>) => {
      const data = localStore.getData();
      localStore.setData({
        ...data,
        settings: { ...data.settings, ...settings },
      });
    },
  
    addTodo: (text: string) => {
      const data = localStore.getData();
      localStore.setData({
        ...data,
        todos: [
          ...data.todos,
          {
            id: crypto.randomUUID(),
            text,
            completed: false,
            createdAt: Date.now(),
          },
        ],
      });
    },
  
    toggleTodo: (id: string) => {
      const data = localStore.getData();
      localStore.setData({
        ...data,
        todos: data.todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      });
    },
  
    deleteTodo: (id: string) => {
      const data = localStore.getData();
      localStore.setData({
        ...data,
        todos: data.todos.filter(todo => todo.id !== id),
      });
    },
  };