const tap = require('tap')

const { parse } = require('./')

tap.test('basics', t => {
  t.deepEqual(parse(`
    12:devices:/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76
    11:hugetlb:/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76
    10:memory:/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76
    9:freezer:/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76
    8:perf_event:/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76
    7:blkio:/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76
    6:pids:/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76
    5:rdma:/
    4:cpuset:/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76
    3:net_cls,net_prio:/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76
    2:cpu,cpuacct:/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76
    1:name=systemd:/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76
    0::/system.slice/docker.service
  `), {
    containerId: '051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76',
    entries: [
      {
        id: '12',
        groups: 'devices',
        path: '/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76',
        controllers: ['devices'],
        containerId: '051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76'
      },
      {
        id: '11',
        groups: 'hugetlb',
        path: '/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76',
        controllers: ['hugetlb'],
        containerId: '051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76'
      },
      {
        id: '10',
        groups: 'memory',
        path: '/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76',
        controllers: ['memory'],
        containerId: '051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76'
      },
      {
        id: '9',
        groups: 'freezer',
        path: '/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76',
        controllers: ['freezer'],
        containerId: '051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76'
      },
      {
        id: '8',
        groups: 'perf_event',
        path: '/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76',
        controllers: ['perf_event'],
        containerId: '051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76'
      },
      {
        id: '7',
        groups: 'blkio',
        path: '/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76',
        controllers: ['blkio'],
        containerId: '051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76'
      },
      {
        id: '6',
        groups: 'pids',
        path: '/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76',
        controllers: ['pids'],
        containerId: '051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76'
      },
      {
        id: '5',
        groups: 'rdma',
        path: '/',
        controllers: ['rdma']
      },
      {
        id: '4',
        groups: 'cpuset',
        path: '/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76',
        controllers: ['cpuset'],
        containerId: '051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76'
      },
      {
        id: '3',
        groups: 'net_cls,net_prio',
        path: '/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76',
        controllers: ['net_cls', 'net_prio'],
        containerId: '051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76'
      },
      {
        id: '2',
        groups: 'cpu,cpuacct',
        path: '/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76',
        controllers: ['cpu', 'cpuacct'],
        containerId: '051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76'
      },
      {
        id: '1',
        groups: 'name=systemd',
        path: '/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76',
        controllers: ['name=systemd'],
        containerId: '051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76'
      },
      {
        id: '0',
        groups: '',
        path: '/system.slice/docker.service',
        controllers: ['']
      }
    ]
  })

  t.deepEqual(parse(`
    3:cpuacct:/ecs/eb9d3d0c-8936-42d7-80d8-f82b2f1a629e/7e9139716d9e5d762d22f9f877b87d1be8b1449ac912c025a984750c5dbff157
  `), {
    containerId: '7e9139716d9e5d762d22f9f877b87d1be8b1449ac912c025a984750c5dbff157',
    entries: [
      {
        id: '3',
        groups: 'cpuacct',
        path: '/ecs/eb9d3d0c-8936-42d7-80d8-f82b2f1a629e/7e9139716d9e5d762d22f9f877b87d1be8b1449ac912c025a984750c5dbff157',
        controllers: ['cpuacct'],
        containerId: '7e9139716d9e5d762d22f9f877b87d1be8b1449ac912c025a984750c5dbff157'
      }
    ]
  })

  t.deepEqual(parse(`
    1:name=systemd:/system.slice/docker-cde7c2bab394630a42d73dc610b9c57415dced996106665d427f6d0566594411.scope
  `), {
    containerId: 'cde7c2bab394630a42d73dc610b9c57415dced996106665d427f6d0566594411',
    entries: [
      {
        id: '1',
        groups: 'name=systemd',
        path: '/system.slice/docker-cde7c2bab394630a42d73dc610b9c57415dced996106665d427f6d0566594411.scope',
        controllers: ['name=systemd'],
        containerId: 'cde7c2bab394630a42d73dc610b9c57415dced996106665d427f6d0566594411'
      }
    ]
  })

  t.deepEqual(parse(`
    1:name=systemd:/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76/not_hex
  `), {
    entries: [
      {
        id: '1',
        groups: 'name=systemd',
        path: '/docker/051e2ee0bce99116029a13df4a9e943137f19f957f38ac02d6bad96f9b700f76/not_hex',
        controllers: ['name=systemd']
      }
    ]
  })

  t.deepEqual(parse(`
    1:name=systemd:/kubepods/besteffort/pode9b90526-f47d-11e8-b2a5-080027b9f4fb/15aa6e53-b09a-40c7-8558-c6c31e36c88a
  `), {
    containerId: '15aa6e53-b09a-40c7-8558-c6c31e36c88a',
    podId: 'e9b90526-f47d-11e8-b2a5-080027b9f4fb',
    entries: [
      {
        id: '1',
        groups: 'name=systemd',
        path: '/kubepods/besteffort/pode9b90526-f47d-11e8-b2a5-080027b9f4fb/15aa6e53-b09a-40c7-8558-c6c31e36c88a',
        controllers: ['name=systemd'],
        containerId: '15aa6e53-b09a-40c7-8558-c6c31e36c88a',
        podId: 'e9b90526-f47d-11e8-b2a5-080027b9f4fb'
      }
    ]
  })

  t.deepEqual(parse(`
    1:name=systemd:/kubepods.slice/kubepods-burstable.slice/kubepods-burstable-pod90d81341_92de_11e7_8cf2_507b9d4141fa.slice/crio-2227daf62df6694645fee5df53c1f91271546a9560e8600a525690ae252b7f63.scope
  `), {
    containerId: '2227daf62df6694645fee5df53c1f91271546a9560e8600a525690ae252b7f63',
    podId: '90d81341_92de_11e7_8cf2_507b9d4141fa',
    entries: [
      {
        id: '1',
        groups: 'name=systemd',
        path: '/kubepods.slice/kubepods-burstable.slice/kubepods-burstable-pod90d81341_92de_11e7_8cf2_507b9d4141fa.slice/crio-2227daf62df6694645fee5df53c1f91271546a9560e8600a525690ae252b7f63.scope',
        controllers: ['name=systemd'],
        containerId: '2227daf62df6694645fee5df53c1f91271546a9560e8600a525690ae252b7f63',
        podId: '90d81341_92de_11e7_8cf2_507b9d4141fa'
      }
    ]
  })

  t.deepEqual(parse(`
    12:devices:/user.slice
    11:hugetlb:/
    10:memory:/user.slice
    9:freezer:/
    8:perf_event:/
    7:blkio:/user.slice
    6:pids:/user.slice/user-1000.slice/session-2.scope
    5:rdma:/
    4:cpuset:/
    3:net_cls,net_prio:/
    2:cpu,cpuacct:/user.slice
    1:name=systemd:/user.slice/user-1000.slice/session-2.scope
    0::/user.slice/user-1000.slice/session-2.scope
  `), {
    entries: [
      {
        id: '12',
        groups: 'devices',
        path: '/user.slice',
        controllers: ['devices']
      },
      {
        id: '11',
        groups: 'hugetlb',
        path: '/',
        controllers: ['hugetlb']
      },
      {
        id: '10',
        groups: 'memory',
        path: '/user.slice',
        controllers: ['memory']
      },
      {
        id: '9',
        groups: 'freezer',
        path: '/',
        controllers: ['freezer']
      },
      {
        id: '8',
        groups: 'perf_event',
        path: '/',
        controllers: ['perf_event']
      },
      {
        id: '7',
        groups: 'blkio',
        path: '/user.slice',
        controllers: ['blkio']
      },
      {
        id: '6',
        groups: 'pids',
        path: '/user.slice/user-1000.slice/session-2.scope',
        controllers: ['pids']
      },
      {
        id: '5',
        groups: 'rdma',
        path: '/',
        controllers: ['rdma']
      },
      {
        id: '4',
        groups: 'cpuset',
        path: '/',
        controllers: ['cpuset']
      },
      {
        id: '3',
        groups: 'net_cls,net_prio',
        path: '/',
        controllers: ['net_cls', 'net_prio']
      },
      {
        id: '2',
        groups: 'cpu,cpuacct',
        path: '/user.slice',
        controllers: ['cpu', 'cpuacct']
      },
      {
        id: '1',
        groups: 'name=systemd',
        path: '/user.slice/user-1000.slice/session-2.scope',
        controllers: ['name=systemd']
      },
      {
        id: '0',
        groups: '',
        path: '/user.slice/user-1000.slice/session-2.scope',
        controllers: ['']
      }
    ]
  })

  t.end()
})
