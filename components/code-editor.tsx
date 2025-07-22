"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Save, GitBranch, Users, Eye } from "lucide-react"

interface CodeEditorProps {
  role: string
}

export function CodeEditor({ role }: CodeEditorProps) {
  const [activeFile, setActiveFile] = useState("app.js")

  const files = [
    { name: "app.js", language: "javascript", author: "Alex Chen", status: "modified" },
    { name: "api/products.js", language: "javascript", author: "Sarah Kim", status: "new" },
    { name: "models/User.js", language: "javascript", author: "You", status: "editing" },
    { name: "tests/api.test.js", language: "javascript", author: "Mike Johnson", status: "review" },
  ]

  const codeContent = {
    "app.js": `// E-Commerce Microservices Main Application
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/orders', require('./routes/orders'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
    "api/products.js": `// Product API Routes
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/products - Get all products
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, category } = req.query;
    const filter = category ? { category } : {};
    
    const products = await Product.find(filter)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });
      
    const total = await Product.countDocuments(filter);
    
    res.json({
      products,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;`,
    "models/User.js": `// User Model
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['customer', 'admin'],
    default: 'customer'
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = mongoose.model('User', userSchema);`,
    "tests/api.test.js": `// API Tests
const request = require('supertest');
const app = require('../app');

describe('Products API', () => {
  test('GET /api/products should return products list', async () => {
    const response = await request(app)
      .get('/api/products')
      .expect(200);
      
    expect(response.body).toHaveProperty('products');
    expect(Array.isArray(response.body.products)).toBe(true);
  });
  
  test('GET /api/products with category filter', async () => {
    const response = await request(app)
      .get('/api/products?category=electronics')
      .expect(200);
      
    expect(response.body.products.every(p => p.category === 'electronics')).toBe(true);
  });
});`,
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-green-100 text-green-800"
      case "modified":
        return "bg-blue-100 text-blue-800"
      case "editing":
        return "bg-yellow-100 text-yellow-800"
      case "review":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="h-full flex">
      {/* File Explorer */}
      <div className="w-64 border-r bg-white">
        <div className="p-4 border-b">
          <h3 className="font-semibold text-sm mb-2">Project Files</h3>
          <div className="space-y-1">
            {files.map((file) => (
              <div
                key={file.name}
                className={`p-2 rounded cursor-pointer text-sm transition-colors ${
                  activeFile === file.name ? "bg-blue-50 text-blue-700" : "hover:bg-gray-50"
                }`}
                onClick={() => setActiveFile(file.name)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono">{file.name}</span>
                  <Badge variant="secondary" className={`text-xs ${getStatusColor(file.status)}`}>
                    {file.status}
                  </Badge>
                </div>
                <div className="text-xs text-gray-500 mt-1 flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  {file.author}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Collaborators */}
        <div className="p-4">
          <h4 className="font-semibold text-sm mb-2">Live Collaborators</h4>
          <div className="space-y-2">
            {[
              { name: "Alex Chen", file: "app.js", color: "bg-purple-500" },
              { name: "Sarah Kim", file: "api/products.js", color: "bg-blue-500" },
              { name: "You", file: "models/User.js", color: "bg-green-500" },
            ].map((collaborator, index) => (
              <div key={index} className="flex items-center space-x-2 text-xs">
                <div className={`w-2 h-2 rounded-full ${collaborator.color}`}></div>
                <span className="font-medium">{collaborator.name}</span>
                <span className="text-gray-500">editing {collaborator.file}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Code Editor */}
      <div className="flex-1 flex flex-col">
        {/* Editor Header */}
        <div className="border-b bg-white p-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="font-mono text-sm">{activeFile}</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-500">Live collaboration active</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button variant="outline" size="sm">
              <GitBranch className="w-4 h-4 mr-2" />
              Commit
            </Button>
            <Button variant="outline" size="sm">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <Play className="w-4 h-4 mr-2" />
              Run
            </Button>
          </div>
        </div>

        {/* Code Content */}
        <div className="flex-1 bg-gray-900 text-gray-100 p-4 font-mono text-sm overflow-auto">
          <pre className="whitespace-pre-wrap">
            <code>{codeContent[activeFile as keyof typeof codeContent]}</code>
          </pre>
        </div>

        {/* Console Output */}
        <div className="h-32 border-t bg-black text-green-400 p-3 font-mono text-xs overflow-auto">
          <div className="mb-1">{">"} npm test</div>
          <div className="text-green-300">Running tests...</div>
          <div className="text-green-300">✓ Products API tests passed (4/4)</div>
          <div className="text-yellow-300">⚠ Warning: Authentication middleware not implemented</div>
          <div className="text-blue-300">ℹ Code coverage: 78%</div>
          <div className="text-green-300">{">"} Server running on port 3000</div>
        </div>
      </div>
    </div>
  )
}
