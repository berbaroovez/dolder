export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      courses: {
        Row: {
          id: number
          created_at: string | null
          updated_at: string | null
          url: string
          paid: boolean | null
          price: number | null
          purchased_on: string | null
          completed: boolean | null
          description: string | null
          favorite: boolean
        }
        Insert: {
          id?: number
          created_at?: string | null
          updated_at?: string | null
          url: string
          paid?: boolean | null
          price?: number | null
          purchased_on?: string | null
          completed?: boolean | null
          description?: string | null
          favorite?: boolean
        }
        Update: {
          id?: number
          created_at?: string | null
          updated_at?: string | null
          url?: string
          paid?: boolean | null
          price?: number | null
          purchased_on?: string | null
          completed?: boolean | null
          description?: string | null
          favorite?: boolean
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
