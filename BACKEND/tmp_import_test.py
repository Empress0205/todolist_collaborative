import sys, importlib, traceback
sys.path.insert(0, 'BACKEND')
try:
    m = importlib.import_module('Accounts.serializers')
    print('OK', getattr(m, 'SignupSerializer', None))
except Exception as e:
    traceback.print_exc()
    print('ERR', type(e).__name__, str(e))
