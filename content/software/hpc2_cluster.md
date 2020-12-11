---
title: "HPC2 Cluster"
---

# HPC2 Compute Cluster

* Head Node connected with 10Gbps external and HDR100 internal: `hpc2.engr.ucdavis.edu`

* Data Transfer Node connected with 10Gbps external and HDR100 internal `hpc2-transfer.engr.ucdavis.edu`

* 44 Compute Nodes with Dual AMD EPYC 7532 CPUs (128 threads per node), and 256 GB of RAM each, with InfiniBand HDR100 interconnect.  CCNLab has 16 of these, and DMLab has 3.

* ZFS Fileserver accessed via NFS serving over InfiniBand HDR200

* hpc2 is running Ubuntu 20.04. Software on the cluster is managed with environment modules. To request software packages, user support, or other hpc2 questions, please email hpc2@help.hpc.ucdavis.edu

* A tutorial and information about using environment modules can be found at: https://modules.sourceforge.net

# .bashrc

Here's a simple `~/.bashrc` file:

```sh
source $HOME/.bash_aliases

source /home/oreilly/.bash_cluster   # special aliases for slurm etc

export GO111MODULE=on

export PATH=$HOME/bin:$HOME/go/bin:/usr/local/bin:$PATH
```

and you can just copy from Randy's .bash_aliases or use your own:

```sh
$ cp ~oreilly/.bash_aliases ~/.
```

(recommend at least looking at Randy's to see what you're missing :)

Looks like you need to call this `.bash_profile` instead of `.bashrc` -- I usually just make a symlink:

```sh
$ ln -s .bashrc .bash_profile
```

You should also sync your local laptop `~/.ssh` up to hpc2 (the one with the public key you registered) -- this allows you to ssh within nodes and to the the transfer node, etc:

```sh
$ rsync -auvv .ssh hpc2.engr.ucdavis.edu:
```

# Test building Go leabra

```sh
$ tar -C ~oreilly/. -xzf go1.15.6.linux-amd64.tar.gz
$ mv go go1.15
$ mkdir bin
$ cd bin
$ ln -s ../go1.15/bin/* .
$ cd
$ mkdir emer
$ cd emer/
$ git clone https://github.com/emer/leabra
$ cd leabra/examples/ra25/
$ go install github.com/emer/etail # handy tool..
$ go build
```
