interface file {
  name: string;
  blob: Blob;
  type: string;
  created_at: string;
  extension: string;
  id: string;
}

interface Course {
  id?: number;
  /**
   * Format: timestamp with time zone
   * @default now()
   */
  created_at?: string;
  /** Format: timestamp with time zone */
  updated_at?: string;
  /** Format: text */
  url?: string;
  /** Format: boolean */
  paid?: boolean;
  /** Format: integer */
  price?: number;
  /** Format: timestamp with time zone */
  purchased_on?: string;
  /** Format: boolean */
  completed?: boolean;
  /** Format: text */
  description?: string;
}

export type { file, Course };
