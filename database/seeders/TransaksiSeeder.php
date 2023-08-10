<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin123'),
            'role' => 'admin',
            'jenis_kelamin' => 'Laki-laki',
        ]);

        User::factory()->create([
            'name' => 'User',
            'email' => 'user@gmail.com',
            'password' => Hash::make('user1234'),
            'role' => 'user',
            'jenis_kelamin' => 'Laki-laki',
        ]);

        User::factory()->create([
            'name' => 'Bengkel',
            'email' => 'bengkel@gmail.com',
            'password' => Hash::make('bengkel'),
            'role' => 'bengkel',
            'jenis_kelamin' => 'Laki-laki',
        ]);
    }
}
