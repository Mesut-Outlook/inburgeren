#!/usr/bin/env python3
"""
server.py — simple static file server for the Inburgeren NT2 Lezen site.

Serves the current directory on port 8126 (chosen to avoid clashing with
another project that may already use 8125).

Usage:
    python3 server.py
Then open http://localhost:8126/ in your browser.
"""
import http.server
import socketserver
import os

PORT = 8126

# Serve files relative to this script's directory, regardless of cwd.
os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler

class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

if __name__ == "__main__":
    with ReusableTCPServer(("", PORT), Handler) as httpd:
        print(f"Serving Inburgeren NT2 Lezen on http://localhost:{PORT}/")
        print("Press Ctrl+C to stop.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopping server.")
