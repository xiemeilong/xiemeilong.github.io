function FindProxyForURL(url, host) {
	if (shExpMatch(host, "*.google.com,twitter.com")||shExpMatch(host, "*.twitter.com")||shExpMatch(host, "*.twimg.com")||shExpMatch(host, "t.co"))
	{
			return "PROXY http://localhost:8788; DIRECT";
	}

	return "DIRECT";
}
